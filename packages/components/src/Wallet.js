import { useState } from 'react'
import { Box, Avatar, HStack, Text, useClipboard, useToast } from '@chakra-ui/react'
import { useWallet, useUtils, useWalletAuth, useSDKCore } from '@xircus-web3/react'
import { TbCheck, TbCopy, TbLogout, TbRefresh } from 'react-icons/tb'
import { Dropdown } from './Menu'

const ICONS_URL = 'https://raw.githubusercontent.com/xircusweb3/wallet-icons/master/wallets/'

export const ConnectWallet = ({ children, wallets = [], actions = [], chains = [], withAuth = false }) => {
  const auth = useWalletAuth()
  const wallet = useWallet()
  const utils = useUtils()
  const toast = useToast()
  const core = useSDKCore()
  const { onCopy, hasCopied, setValue, value } = useClipboard(wallet.account || '')
  const [loading, setLoading] = useState(false)

  const defWallets = [
    { 
      key: 'metamask',
      icon: <Avatar size="xs" bg="transparent" src={`${ICONS_URL}/metamask150.png`} />,
      content: 'Metamask', 
      onClick: wallet.connectMetamask
    },
    { 
      key: 'walletconnect',
      content: 'WalletConnect', 
      icon: <Avatar size="xs" bg="transparent" src={`${ICONS_URL}/walletconnect150.png`} />,      
      onClick: wallet.connectWalletConnect
    },
    { 
      key: 'coinbase',
      content: 'Coinbase Wallet',
      icon: <Avatar size="xs" bg="transparent" src={`${ICONS_URL}/coinbase150.png`} />,      
      onClick: wallet.connectCoinbase
    },
    { 
      key: 'phantom',
      content: 'Phantom',
      icon: <Avatar size="xs" bg="transparent" src={`${ICONS_URL}/phantom150.png`} />,      
      onClick: wallet.connectPhantom
    },        
    { 
      key: 'sender',
      content: 'Sender',
      icon: <Avatar size="xs" bg="transparent" src={`${ICONS_URL}/sender150.png`} />,      
      onClick: wallet.connectSender
    },            
    ...wallets
  ]

  const handleCopy = () => {
    onCopy()
    toast({
      title: 'Address Copied',
      description: value,
      variant: 'solid',
      status: 'info',
      isClosable: true,
      containerStyle: {
        bg: 'bg.orange'
      }
    })
  }

  const handleGetBalance = async() => {
    setLoading(true)
    await wallet.getAccountBalance()
    setLoading(false)
  }

  if (wallet.status == 'connected') {

    const defActions = [
      {
        key: 'copy',
        content: hasCopied ? 'Copied' : 'Copy Address',
        icon: hasCopied ? <TbCheck /> : <TbCopy />,      
        onClick: handleCopy      
      },
      {
        key: 'balance',
        content: 'Get Balance',
        icon: <TbRefresh />,
        onClick: handleGetBalance
      },      
      {
        key: 'disconnect',
        content: 'Disconnect', 
        icon: <TbLogout />,      
        onClick: wallet.disconnect        
      },
      ...actions
    ]

    return (
      <Dropdown items={defActions} btnProps={{ isLoading: loading }}>
        {
          children
          ? children
          : (
            <>
              <HStack fontSize="xs">
                <Text>
                  {utils.shortAddr(wallet.account)}
                </Text>
              </HStack>
              <HStack fontSize="10px">
                <Text>{parseFloat(wallet.balance).toFixed(4)}</Text>
                <Text>{wallet.network?.symbol}</Text>
              </HStack>            
            </>
          )
        }
      </Dropdown>
    )
  }

  return <Dropdown items={defWallets}>Connect</Dropdown>
}