import { Fragment } from 'react'
import ReactCountdown from 'react-countdown'
import { Heading } from '@chakra-ui/react'

export const Countdown = ({ date, children }) => {
  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Fragment>{children && children}</Fragment>
    } else {
      return <Heading>{ days > 0 && `${days}d` } { hours > 0 && `${hours}h` } { minutes > 0 && `${minutes}m` } { seconds > 0 && `${seconds}s` }</Heading>
    }
  }

  return <ReactCountdown 
    date={date} 
    renderer={renderCountdown}
    />
}