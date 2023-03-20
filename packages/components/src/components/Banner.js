import { Text, Box, useColorModeValue as mode } from "@chakra-ui/react"

export const Banner = ({ children, ...rest }) => (
  <Box bg={mode('gray.100', 'gray.900')} p={2} px={6} {...rest}>
    <Text color="white" fontSize="xs" fontFamily="mono">{children}</Text>
  </Box>  
)
