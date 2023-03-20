import { ChakraProvider } from '@chakra-ui/react'
import { XircusProvider } from '@xircus-web3/react'

export const XircusChakraProvider = ({ children, chakra, ...rest }) => {
  return (
    <ChakraProvider {...chakra}>
      <XircusProvider {...rest}>
        {children}
      </XircusProvider>
    </ChakraProvider>
  )
}