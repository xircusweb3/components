import { useEffect, useState } from 'react'
import { HStack, IconButton, Skeleton, Spacer, Text } from "@chakra-ui/react"
import { getTokenBalance } from '../service/getTokenBalance'
import { TbRefresh } from 'react-icons/tb'
import { UTILS } from '@xircus-web3/sdk'

/**
 * Displays the balance of a wallet address
 * @returns 
 */
export const TokenBalance = ({ tokenAddress, walletAddress, chain, precision = 4 }) => {
  const [balance, setBalance] = useState()
  const [token, setToken] = useState({ symbol: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tokenAddress && walletAddress && chain) {
      loadBalance()
    }
  }, [tokenAddress, walletAddress, chain])

  const loadBalance = async() => {
    setLoading(true)
    const { balance, meta } = await getTokenBalance(walletAddress, tokenAddress, chain)
    setBalance(balance)
    setToken(meta)
    setLoading(false)
  }

  return (
    <HStack>
      <Text>{UTILS.shortAddr(walletAddress)}</Text>
      <Spacer />
      { 
        loading 
        ? <Skeleton w="120px" h="22px" /> 
        : <Text>{parseFloat(balance || '0').toFixed(precision)}</Text>
      }
      {
        loading
        ? <Skeleton w="40px" h="22px" />
        : <Text>{token?.symbol}</Text>
      }
      <IconButton 
        icon={<TbRefresh />} 
        onClick={loadBalance}
        isLoading={loading} 
        size="xs"
        />
    </HStack>
  )
}