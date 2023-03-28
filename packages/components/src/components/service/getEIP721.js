import { connect } from "./connect"

export const getEIP721 = async(assetAddress, chain) => {
  const core = await connect(chain)
  const asset = core.getEIP721(assetAddress)
  return {
    core,
    asset,
    meta: {
      name: await asset.name(),
      symbol: await asset.symbol(),
      totalSupply: (await asset.totalSupply()).toString()
    }
  }
}

export const getEIP721Item = async(assetAddress, assetId, chain) => {
  const { core, asset } = await getEIP721(assetAddress, chain)
  
}