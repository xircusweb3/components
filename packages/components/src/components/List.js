import { Box, List, ListItem, useColorModeValue as mode } from "@chakra-ui/react"

export const ArrayList = ({ list = [], theme, ...rest }) => (
  <Box bg={mode('gray.50', 'gray.900')} p={2} borderRadius="md" mb={4}>
    <List fontSize="sm" h={list.length > 20 ? 500 : 'auto'} overflow="auto" {...rest}>
      {list.map((l, lId) => <ListItem p={1} borderRadius="md" px={3} _hover={{ bgColor: mode('white', 'black') }} key={lId}>{l}</ListItem>)}
    </List>
  </Box>  
)