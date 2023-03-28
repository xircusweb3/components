import { Button } from '@chakra-ui/react'
import { useWallet } from '@xircus-web3/react'

export const DisconnectButton = props => {
  const wallet = useWallet()
  return <Button {...props} onClick={wallet.disconnect} />
}