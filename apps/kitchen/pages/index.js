import { Button, Container, useColorMode } from "@chakra-ui/react"
import { Banner, ConnectWallet } from "@xircus-web3/components"
import { useWallet, useSDK } from '@xircus-web3/react'

export default function Home() {
  const wallet = useWallet()
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <div>
      <Banner>Xircus UI Kitchen</Banner>
      <Container maxW="container.xl" mt={10}>
        <ConnectWallet btnProps={{ variant: 'outline' }} />
        <Button onClick={toggleColorMode}>{colorMode}</Button>
      </Container>
    </div>
  )
}
