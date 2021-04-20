import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 3rem;

  background: ${props => props.theme.colors.primary.normal};
  color: #fff;
  border-radius: 0.2rem;
  border: none;

  font-size: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
