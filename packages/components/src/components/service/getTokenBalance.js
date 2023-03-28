import { UTILS } from '@xircus-web3/sdk'
import { getToken } from './getToken'

export const getTokenBalance = async(walletAddress, tokenAddress, chain) => {
  const { core, token, meta } = await getToken(tokenAddress, chain)
  const balanceWei = await token.balanceOf(walletAddress)
  const balance = UTILS.fromWei(balanceWei, decimals.toString())
  return {
    core,
    token,
    balanceWei,
    balance,
    meta
  }
}