import { Container } from "@chakra-ui/react"
import { Banner, ConnectWallet } from "@xircus-web3/components"
import { useWallet, useSDK } from '@xircus-web3/react'

export default function Home() {
  const wallet = useWallet()

  return (
    <div>
      <Banner>Xircus UI Kitchen</Banner>
      <Container maxW="container.xl" mt={10}>
        <ConnectWallet />
      </Container>
    </div>
  )
}
