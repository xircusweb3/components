import { XircusChakraProvider } from "@xircus-web3/components"

function MyApp({ Component, pageProps }) {
  return (
    <XircusChakraProvider autoConnect={true}>
      <Component {...pageProps} />
    </XircusChakraProvider>
  )
}

export default MyApp
