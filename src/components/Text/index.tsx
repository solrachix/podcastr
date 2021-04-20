import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

interface StyledProps {
  className?: string
  align?: string
  size?: number
  color?: string
  weight?: string | number
}

// interface ComponentProps extends StyledProps {
//   text: string;
// }

const Text = styled.p<StyledProps>`
  ${({ theme, align, size, weight, color, theme: { colors } }) => css`
    width: auto;
    max-width: 100%;
    font-family: 'Nunito', Roboto, sans-serif !important;
    text-align: ${align};
    font-size: ${size}em;
    font-weight: ${weight};
    color: ${color || colors.text.normal};
    margin: 0;
    word-break: break-word;
    strong {
      font-weight: bold;
      color: ${colors.primary.normal};
    }
  `}
`

const TextComponent: React.FC<StyledProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

TextComponent.propTypes = {
  // text: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf([
    'normal',
    'bold',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ])
}

TextComponent.defaultProps = {
  size: 1,
  // color: '#222',
  weight: 'normal',
  align: 'left'
}

export default TextComponent
