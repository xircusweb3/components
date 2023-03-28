import { HStack, Select } from "@chakra-ui/react"
import { useNetwork } from "@xircus-web3/react"
import { useState } from "react"

export const ChangeNetwork = ({ children, onComplete, hasAuth, wrap, ...rest }) => {
  const { chains, network, ready, switchNetwork } = useNetwork()
  const [networkId, setNetworkId] = useState(1)

  const handleSwitchNetwork = ({ target: { value } }) => {
    setNetworkId(networkId)
    switchNetwork(value)
  }
  
  if (ready) {
    return (
      <HStack {...wrap}>
        <Select minW={300} size="sm" onChange={handleSwitchNetwork} borderRadius="md" value={network?.networkId} {...rest}>
          {(chains || []).map(c => <option key={c.chainId} value={c.chainId}>{c.name}</option>)}
        </Select>
      </HStack>
    )
  }

}