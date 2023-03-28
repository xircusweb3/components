import { useEffect, useState, Fragment } from 'react'
import { getTokenBalance } from '../service/getTokenBalance'

/**
 * Displays children if balance hits the minAmount
 * @returns 
 */
export const TokenGate = ({ tokenAddress, walletAddress, chain, minAmount = 0, onFail, onSuccess, children }) => {
  const [balance, setBalance] = useState(false)
  const [token, setToken] = useState(false) 

  useEffect(() => {
    if (tokenAddress && walletAddress && chain) {
      onRefresh()
    }
  }, [tokenAddress, walletAddress, chain])

  const onRefresh = async() => {
    const { balance, meta } = await getTokenBalance(walletAddress, tokenAddress, chain)
    setBalance(balance)
    setToken(meta)
  }

  if (parseFloat(balance) >= parseFloat(minAmount)) {
    return <Fragment>{onSuccess ? onSuccess({ balance, token, onRefresh }) : children}</Fragment>
  } else {
    if (balance) {
      return <Fragment>{onFail && onFail({ balance, token, onRefresh })}</Fragment>
    }
  }

  return null

}