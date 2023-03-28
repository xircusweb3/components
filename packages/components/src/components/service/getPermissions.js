import { connect } from "./connect"

export const getPermissions = async(assetAddress, chain) => {
  const core = await connect(chain)
  
}