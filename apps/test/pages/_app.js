import { ChakraProvider } from '@chakra-ui/react'
import { XircusProvider } from '@xircus-web3/react'

export default function App({ Component, pageProps }) {
  return (
    <XircusProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </XircusProvider>
  )
}
