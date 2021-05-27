import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  max-width: 100% !important;
  min-height: 100vh;
  padding: 0 4rem;

  flex-direction: column;

  background: url('/images/blur.svg') no-repeat;
  background-size: 100vw;
  background-position-y: top;
  background-attachment: local;

  section,
  img {
    z-index: 5;
  }

  &,
  header,
  section,
  button {
    display: flex;
    align-items: center;
  }

  button {
    width: fit-content;
    padding: 1rem 3rem;
    justify-content: center;

    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.background.light};
    border: none;
    border-radius: ${props => props.theme.borderRadius};

    font-weight: 700;
    font-size: 1.2rem;
  }

  header {
    width: 100%;
    min-height: 7rem;

    justify-content: space-between;

    img {
      width: 4rem;
    }

    div {
      width: 14rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        height: 3rem;
      }

      svg {
        width: 2.5rem;
        height: 2.5rem;

        cursor: pointer;
        path {
          stroke: ${props => props.theme.colors.text.normal};
        }
      }
    }
  }

  section {
    flex-direction: column;

    &:nth-of-type(1) {
      padding: 4rem 0;

      span {
        font-size: 1.4rem;

        color: ${props => props.theme.colors.secondary};
        opacity: 0.8;
      }

      h1,
      p {
        max-width: 500px;

        text-align: center;
      }

      h1 {
        font-size: 4rem;
        line-height: 8rem;

        color: ${props => props.theme.colors.text.normal};
      }

      p {
        font-size: 1.4rem;
        line-height: 2.6rem;

        color: ${props => props.theme.colors.text.normal};
      }

      button {
        width: 14rem;
        height: 4rem;
        margin-top: 2rem;

        background: ${props => rgba(props.theme.colors.background.light, 0.4)};
        backdrop-filter: blur(10px);
        color: ${props => props.theme.colors.secondary};
        border: 2px solid ${props => rgba(props.theme.colors.secondary, 0.6)};
      }
    }

    &:nth-of-type(2) {
      .dashboard {
        width: 80vw;

        transition: all 1s;

        --background-lighter: ${props => props.theme.colors.background.lighter};
        --background-light: ${props => props.theme.colors.background.light};
        --background-normal: ${props => props.theme.colors.background.normal};
        --tertiary: ${props => props.theme.colors.tertiary};
        --primary-dark: ${props => props.theme.colors.primary.dark};
        --text-normal: ${props => props.theme.colors.text.normal};
        --text-dark: ${props => props.theme.colors.text.dark};

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`
