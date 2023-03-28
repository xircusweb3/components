import { 
  Button, Menu, MenuList, MenuItem, MenuButton, IconButton, 
  useColorModeValue as mode
} from '@chakra-ui/react';

export const ButtonMenu = ({ label, items = [], children, menuProps, btnProps }) => (
  <Menu closeOnBlur preventOverflow placement="bottom-end" {...menuProps}>
    <MenuButton
      as={Button}
      borderColor={mode('gray.100', 'gray.900')}
      rightIcon={<IoChevronDown size={10} />}
      {...btnProps}>
      {label}
    </MenuButton>
    <MenuList
      p={2}
      borderColor={mode('gray.100', 'gray.900')}
      bg={mode('#fff', '#090909')}
      shadow="none">
      {children}
      {
        items.map((item, itemId) => <MenuItem key={`item-${itemId}`} borderRadius="md" _focus={{ bg: mode('gray.100', 'gray.900') }} {...item}>{item.label}</MenuItem>)
      }
    </MenuList>
  </Menu>
)


export const IconMenu = ({ children, icon, menuProps, btnProps }) => (
  <Menu closeOnBlur preventOverflow isLazy {...menuProps}>
    <MenuButton icon={icon} as={IconButton} {...btnProps} />
    <MenuList
      p={2}
      borderColor={mode('gray.100', 'gray.900')}
      bg={mode('#fff', '#090909')}
      shadow="none">
      {children}
    </MenuList>
  </Menu>
)
