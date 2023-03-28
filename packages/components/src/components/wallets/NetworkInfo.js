import { Avatar, Box, Button, Heading, HStack, List, ListItem, Stack, Text } from "@chakra-ui/react"
import { useNetwork } from '@xircus-web3/react'
import { ChangeNetwork } from "../ChangeNetwork"
import { TbWallet, TbExternalLink, TbSwitch, TbApi } from "react-icons/tb"

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const NetworkInfo = ({ variant = 'list' }) => {
  const { network, ready, addToWallet, switchNetwork } = useNetwork()

  if (network == undefined) {
    return (
      <Box>
        <Box>Unsupported Network</Box>
        <ChangeNetwork />
      </Box>
    )
  }

  if (ready && network) {
    switch(variant) {
      case 'list':
        return (
          <List>
            {Object.keys(network).map(name => <ListItem key={name}>{name.toUpperCase()}: {network[name]}</ListItem>)}
          </List>
        )
      case 'card':
        return (
          <Box maxW="500px">
            <Stack>
              <HStack>
                <Avatar size="md" alignSelf="center" src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${network?.icon}/info/logo.png`} />
                <Box>
                  <Heading size="sm">{network?.name}</Heading>
                  <HStack fontSize="xs">
                    <Text fontWeight="bold">{network?.symbol}</Text>
                    <Text>{network?.decimals}</Text>              
                  </HStack>
                </Box>
              </HStack>
              <Button size="xs" leftIcon={<TbApi />} href={network?.rpc} as="a" target="_blank">Open RPC</Button>
              <Button size="xs" leftIcon={<TbExternalLink />} href={network?.explorer} as="a" target="_blank">View Explorer</Button>
              <Button size="xs" leftIcon={<TbWallet />} onClick={() => addToWallet(network?.networkId)}>Add to Metamask</Button>
              <Button size="xs" leftIcon={<TbSwitch />} onClick={() => switchNetwork(network?.networkId)}>Switch Network</Button>        
            </Stack>              
          </Box>
        )
    }
  }
 
}

{/* <CopyText text={rpc} size="xs" label="Copy RPC" /> */}
