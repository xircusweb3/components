import { XircusSDK } from '@xircus-web3/sdk'

export const connect = async(chain) => {
  const core = XircusSDK.getEVMCore()
  await core.connect(chain)  
  return core
}