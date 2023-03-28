import { HStack, Input, FormLabel, FormControl, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const DateTimeInput = ({ label, control, onComplete }) => {
  const [date, setDate] = useState({ date: false, time: false })
  const [unix, setUnix] = useState('')
  const [rel, setRel] = useState('')

  useEffect(() => {
    if (date.date || date.time) {
      const d = dayjs(`${date.date} ${date.time}`)
      console.log("DATE", d, d.unix(), d.fromNow())
      setUnix(d.unix())
      setRel(d.fromNow())
      onComplete && onComplete(unix)
    }
  }, [date])

  const handleChange = ({ target: { name, value } }) => setDate({ ...date, [name]: value })

  return (
    <FormControl {...control}>
      <Flex justify="space-between">
        <FormLabel fontSize="sm" fontWeight="bold" color={mode('gray.700', 'gray.300')}>{label}</FormLabel> 
        <FormLabel fontSize="sm" mx={0} color="gray.500">{unix} {rel && `(${rel})`}</FormLabel>
      </Flex>
      <HStack gap={2}>
        <Input name="date" type="date" onChange={handleChange} />
        <Input name="time" type="time" onChange={handleChange} />
      </HStack>    
    </FormControl>
  )
}