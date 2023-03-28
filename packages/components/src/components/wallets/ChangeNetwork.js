import { useState } from 'react'
import { Select } from "@chakra-ui/react"
import { useNetwork } from '@xircus-web3/react'

export const ChangeNetwork = ({ theme, ...rest }) => {
  const { switchNetwork, chains, network } = useNetwork()
  const [networkId, setNetworkId] = useState(1)

  const handleSwitchNetwork = ({ target: { value } }) => {
    setNetworkId(networkId)
    switchNetwork(value)
  }

  return (
    <Select 
      maxW="500px"
      minW={{ base: 'full', md: 300 }} 
      borderRadius="md"
      onChange={handleSwitchNetwork} 
      value={network?.networkId}
      {...theme?.control}
      {...rest}>
      {
        (chains || []).map(c => 
          <option 
            key={c.chainId} 
            value={c.chainId} 
            {...theme?.option}>
              {c.name}
            </option>
          )
      }
    </Select>
  )
}