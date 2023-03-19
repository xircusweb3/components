import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { TbChevronDown } from 'react-icons/tb'

export const Dropdown = ({ children, items = [], btnProps }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<TbChevronDown />} {...btnProps}>
        {children}
      </MenuButton>
      <MenuList>
        {
          (items || []).map(item => <MenuItem key={item.key} {...item}>{item.content}</MenuItem>)
        }
      </MenuList>
    </Menu>
  )
}