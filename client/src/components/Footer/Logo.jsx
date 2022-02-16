import { chakra, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'
import logo from '../../images/nice.png'

export const Logo = (props) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <chakra.svg
      color={useColorModeValue('blue.500', 'blue.300')}
      aria-hidden
      viewBox="0 0 123 24"
      fill="none"
      h="6"
      flexShrink={0}
      {...props}
    >
      <img src={logo} alt="logo" />
    </chakra.svg>
  )
}