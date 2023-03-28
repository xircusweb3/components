import { Box, Button, Container, Heading, useColorMode, Wrap } from "@chakra-ui/react"
import { Banner, ChangeNetwork, ConnectButton, ConnectModal, ConnectWallet, Countdown, DisconnectButton, MarketTopup, NetworkInfo, OutlineCard, Swapper, Wallet } from "@xircus-web3/components"
import { useWallet, useSDK } from '@xircus-web3/react'

export default function Home() {
  const wallet = useWallet()
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <>
      <Banner>Xircus UI Kitchen</Banner>
      <Container maxW="container.xl" mt={10}>
        <Box mb={4}>
          <ConnectWallet btnProps={{ variant: 'outline' }} />
          <ConnectButton>
            <Heading>Wallet Connected</Heading>
           <DisconnectButton>Disconnect</DisconnectButton>
          </ConnectButton>

          <ConnectModal>
            You are connected via modal
            <Wallet />
          </ConnectModal>

          <Button onClick={toggleColorMode}>{colorMode}</Button>
          <OutlineCard color="gray.500">
            <NetworkInfo variant="card" />
          </OutlineCard>
          <ChangeNetwork />
        </Box>
        <Countdown date={Date.now() + 10000}>
          <Heading>Countdown Complete Thank You!</Heading>
        </Countdown>
        <MarketTopup />
        <Swapper />
      </Container>
    </>
  )
}
