import { Heading, Button } from "@chakra-ui/react";

const gradient = `linear(to-l, #8a2387, #e94057, #f27121)`

export const GradientHeading = props => 
  <Heading 
    display="inline-block" 
    bgGradient={gradient}
    bgClip="text"
    {...props}
    />

export const GradientButton = props => 
  <Button
    color="white"
    transition="all 300ms ease"
    bgGradient={gradient}
    borderWidth={0}
    _hover={{
      bgGradient: gradient
    }}
    _active={{
      transform: 'translateY(2px)',
      bgGradient: gradient
    }}
    {...props}
    />