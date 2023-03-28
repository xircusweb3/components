import { Wallet } from './Wallet'
import { ConnectButton } from './ConnectButton'

export const ConnectWallet = ({ btnProps }) => {
  return (
    <ConnectButton theme={{ button: btnProps }}>
      <Wallet theme={{ button: btnProps }} />
    </ConnectButton>
  )  
}