import { createContext, useMemo } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { XircusProvider } from '@xircus-web3/react'

const XircusChakraContext = createContext()

export const XircusChakraProvider = ({ children, chakra, ...rest }) => {

  const ctx = useMemo(() => {

  }, [])

  return (
    <ChakraProvider {...chakra}>
      <XircusProvider {...rest}>
        <XircusChakraContext.Provider value={ctx}>
          {children}
        </XircusChakraContext.Provider>
      </XircusProvider>
    </ChakraProvider>
  )
}
