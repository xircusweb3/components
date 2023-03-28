import { connect } from './connect'

export const getToken = async(tokenAddress, chain) => {
  const core = await connect(chain)
  const token = core.getToken(tokenAddress)
  const name = await token.name()
  const symbol = await token.symbol()
  const decimals = await token.decimals()
  const totalSupply = await token.totalSupply()
  return {
    core,
    token,
    meta: {
      name,
      symbol,
      decimals: decimals.toString(),
      totalSupply: totalSupply.toString(),
    }
  }
}