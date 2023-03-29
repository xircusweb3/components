import { connect } from "./connect"

export const getEIP1155 = async(assetAddress, chain) => {
  const core = await connect(chain)
  const asset = core.getEIP1155(assetAddress)
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

export const getEIP1155Item = async(assetAddress, assetId, chain) => {
  const { core, asset } = await getEIP1155(assetAddress, chain)
}