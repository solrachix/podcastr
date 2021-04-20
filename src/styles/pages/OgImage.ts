import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 1200px;
    height: 630px;
    margin: auto;
    padding: 2rem 8rem;

    background-color: ${rgba(theme.colors.secondary, 0.02)};

    .code {
      position: absolute;
      width: 500px;
      height: calc(100% - 8rem);
      margin: 2rem 4rem;

      background: url('/images/code.png') no-repeat left;
      background-size: contain;

      z-index: 5;

      -webkit-mask-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 2%,
        rgba(0, 0, 0, 0.1) 80%
      );
      -webkit-mask-size: 90% 90%;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center, center;
    }

    main {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 26% 74%;
      grid-template-rows: 100%;
      align-items: center;
      column-gap: 2%;
    }
    .column {
      display: flex;
      flex-direction: column;

      z-index: 10;
      &:nth-of-type(1) {
        width: 100%;

        &:after {
          position: absolute;
          content: '';
          width: 120px;
          height: 120px;

          margin: 0% -2rem;

          background: ${rgba(theme.colors.secondary, 0.4)};
          border-radius: 50%;

          filter: blur(80px);

          z-index: -1;
        }
        svg {
          width: 100%;
          /* height: 100%; */
        }
      }

      &:nth-of-type(2) {
        width: 100%;
        /* height: 190px; */
        margin-top: 6%;
        /* margin: auto; */

        justify-content: flex-end;
        align-items: flex-start;

        h1 {
          font-family: Roboto, sans-serif;
          font-weight: 400;
          font-size: 54px;
          line-height: 4rem;

          color: ${props => props.theme.colors.text.light};

          b {
            font-weight: 600;
          }
        }
      }
    }
  `}
`
