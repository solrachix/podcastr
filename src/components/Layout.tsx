import styled from 'styled-components'

export default styled.div.attrs(() => ({
  id: 'layout'
}))`
  width: 100%;

  display: flex;

  main {
    flex: 1;
    width: 100%;

    & > div {
      max-width: 1300px;
      height: calc(100vh - 6.5rem);
      margin: auto;

      overflow-y: auto;
    }
  }
`
