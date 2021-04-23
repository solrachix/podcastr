import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.svg`
  --background-lighter: ${props => props.theme.colors.background.lighter};
  --background-light: ${props => props.theme.colors.background.light};
  --background-normal: ${props => props.theme.colors.background.normal};
  --tertiary: ${props => props.theme.colors.tertiary};
  --primary-dark: ${props => props.theme.colors.primary.dark};
  --text-normal: ${props => props.theme.colors.text.normal};
  --text-dark: ${props => props.theme.colors.text.dark};
`
