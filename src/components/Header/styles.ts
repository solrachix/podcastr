import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 4rem;

  background: ${props => props.theme.colors.tertiary};
  border-bottom: 1px solid ${props => props.theme.colors.background.lighter};

  display: flex;
  align-items: center;

  img,
  svg {
    cursor: pointer;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 2rem;

    cursor: pointer;
    path {
      stroke: ${props => props.theme.colors.text.normal};
    }
  }

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
