import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 0 4rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .latestEpisodes {
    max-width: 1000px;
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: 1.5rem;

      li {
        background: ${props => props.theme.colors.tertiary};
        border: 1px solid ${props => props.theme.colors.background.lighter};
        padding: 1.25rem;
        border-radius: 1.5rem;
        position: relative;

        display: grid; // flex
        grid-template-rows: 100%;
        grid-template-columns: 6rem calc(100% - 6rem);

        align-items: center;

        img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
        }

        .episodeDetails {
          flex: 1;
          margin-left: 1rem;

          a {
            display: block;
            color: ${props => props.theme.colors.text.dark};
            font-family: ${props => props.theme.font.title};
            font-weight: 600;
            text-decoration: none;
            line-height: 1.4rem;

            &:hover {
              text-decoration: underline;
            }
          }

          p {
            font-size: 0.875rem;
            margin-top: 0.5rem;
            max-width: 70%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          span {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: 0.875rem;

            &:last-child {
              margin-left: 0.5rem;
              padding-left: 0.5rem;
              position: relative;

              &::before {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 2px;
                background: #ddd;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }

        button {
          position: absolute;
          right: 2rem;
          bottom: 2rem;

          width: 2.5rem;
          height: 2.5rem;
          background: ${props => props.theme.colors.tertiary};
          border: 1px solid ${props => props.theme.colors.background.lighter};
          border-radius: 0.675rem;
          font-size: 0;

          transition: filter 0.2s;

          img {
            width: 1.5rem;
            height: 1.5rem;
          }

          &:hover {
            filter: brightness(0.95);
          }
        }
      }
    }
  }

  .allEpisodes {
    padding-bottom: 2rem;

    table {
      width: 100%;

      th,
      td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid ${props => props.theme.colors.background.light};
      }

      th {
        color: ${props => props.theme.colors.text.normal};
        text-transform: uppercase;
        font-family: ${props => props.theme.font.title};
        text-align: left;
      }

      td {
        font-size: 0.875rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
        }

        a {
          color: ${props => props.theme.colors.text.dark};
          font-family: ${props => props.theme.font.title};
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 1rem;

          &:hover {
            text-decoration: underline;
          }
        }

        button {
          width: 2rem;
          height: 2rem;
          background: ${props => props.theme.colors.tertiary};
          border: 1px solid ${props => props.theme.colors.background.lighter};
          border-radius: 0.5rem;
          font-size: 0;

          transition: filter 0.2s;

          img {
            width: 1.25rem;
            height: 1.25rem;
          }

          &:hover {
            filter: brightness(0.95);
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    .latestEpisodes {
      ul {
        grid-template-columns: 100%;
      }
    }
  }
`
