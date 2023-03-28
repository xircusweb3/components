import { useEffect, useRef, useState } from "react"
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useDebounce } from "@xircus-web3/react"
import { TbSearch } from "react-icons/tb"
import { useHotkeys } from 'react-hotkeys-hook'

export const Search = ({ size = 'sm', hotKey = 'meta + /', onBounce, onSearch, right, left, theme, ...rest }) => {
  const [search, setSearch] = useState('')
  const bounce = useDebounce(search)
  const ref = useRef()

  useHotkeys(hotKey, () => {
    ref.current.focus()
    setSearch('')
  })

  useEffect(() => {
    onBounce && onBounce(bounce)
  }, [bounce])

  const handleChange = ({ target: { value } }) => {
    setSearch(value)
    onSearch && onSearch(value)
  }

  return (
    <InputGroup size={size} {...theme?.wrap}>
      { left && <InputRightElement {...theme?.left}>{left}</InputRightElement> }
      <Input 
        ref={ref}
        value={search} 
        onChange={handleChange} 
        borderRadius="lg"
        {...theme?.control}
        {...rest}
        />    
      { right && <InputRightElement {...theme?.right}>{right}</InputRightElement> }
      {
        onSearch && (
          <InputRightElement {...theme?.right}>
            <IconButton variant="ghost" icon={<TbSearch /> } size={size} onClick={onSearch} />
          </InputRightElement>
        )
      }
    </InputGroup>
  )
}