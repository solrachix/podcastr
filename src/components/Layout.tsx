import styled from 'styled-components'

export default styled.div.attrs(() => ({
  id: 'layout'
}))`
  width: 100%;

  display: flex;

  main {
    flex: 1;
  }
`
