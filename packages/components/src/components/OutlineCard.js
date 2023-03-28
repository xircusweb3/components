import { Box, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react'

export const OutlineCard = ({ title, label, children, color, theme, ...rest }) => {
  return (
    <Box 
      borderColor={color || mode('gray.50', 'gray.900')} 
      borderWidth={1}
      mb={2}
      p={4}
      rounded="md"
      {...rest}>
      <Box {...theme?.header}>
      { title && <Heading size="sm" color="gray.500" mb={1} {...theme?.title}>{title}</Heading> }
      { label && <Text fontSize="xs" color="gray.500" mb={2}  {...theme?.label}>{label}</Text> }
      </Box>
      <Box {...theme?.content} >
        { children }
      </Box>
    </Box>
  )
}