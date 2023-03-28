import { Box, Button, Container, Heading, HStack, useColorMode, Wrap } from "@chakra-ui/react"
import { Banner, ChangeNetwork, ConnectButton, ConnectModal, ConnectWallet, Countdown, DisconnectButton, MarketTopup, NetworkInfo, OutlineCard, Swapper, TokenBalance, TokenGate, Wallet } from "@xircus-web3/components"
import { useWallet, useSDK } from '@xircus-web3/react'

export default function Home() {
  const wallet = useWallet()
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <>
      <Banner>Xircus UI Kitchen</Banner>
      <Container maxW="container.xl" mt={10}>
        <Box mb={4}>
          <HStack></HStack>

          <Button onClick={toggleColorMode}>{colorMode}</Button>
          <OutlineCard title="Wallets" color="gray.500">

            <HStack>
              <ConnectWallet btnProps={{ variant: 'outline' }} />
    
              <ConnectButton>
                <Heading>Wallet Connected</Heading>
                <DisconnectButton>Disconnect</DisconnectButton>
              </ConnectButton>

              <ConnectModal>
                You are connected via modal
                <Wallet />
              </ConnectModal>
            </HStack>

          </OutlineCard>
          <OutlineCard color="gray.500">
            <NetworkInfo variant="card" />
          </OutlineCard>
          <ChangeNetwork />
        </Box>
        <MarketTopup />
        <Swapper />
        <TokenBalance 
          chain={56} 
          tokenAddress="0x1df2bF8bFf0f2a8d67cf84ca55Fc9cCC9C3dA018" 
          walletAddress="0x2aA971AB5d5113CA885B5495d22b0987311cD614"
          />
        <TokenGate
          chain={56} 
          tokenAddress="0x1df2bF8bFf0f2a8d67cf84ca55Fc9cCC9C3dA018"
          walletAddress="0x2aA971AB5d5113CA885B5495d22b0987311cD614"     
          minAmount="100"
          onFail={({  }) => <Button>Buy</Button>}
          >
          <Heading>Gated Content</Heading>
        </TokenGate>
      </Container>
    </>
  )
}


  // <Countdown date={Date.now() + 10000}>
  // <Heading>Countdown Complete Thank You!</Heading>
  // </Countdown>
