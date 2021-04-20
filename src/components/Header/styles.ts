import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 4rem;

  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.background.lighter};

  display: flex;
  align-items: center;

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;

    border-left: 1px solid ${props => props.theme.colors.background.lighter};
  }

  span {
    margin-left: auto;

    text-transform: capitalize;
  }
`
