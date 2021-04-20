import React from 'react'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { IconType } from 'react-icons'
import { Container } from './styles'

interface Props extends React.ReactElement<HTMLButtonElement> {
  // type: 'button' | 'submit' | 'reset'
  text: string
  icon?: IconType
}

const Button: React.FC<Props> = ({
  type = 'button',
  text,
  icon = HiOutlineArrowNarrowRight,
  ...props
}) => {
  return (
    <Container type={type} className="button" {...props}>
      {text}
      {icon({})}
    </Container>
  )
}

export default Button
