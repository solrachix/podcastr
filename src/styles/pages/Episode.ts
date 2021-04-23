import styled from 'styled-components'

export const Container = styled.div`
  max-width: 45rem !important;
  padding: 3rem 2rem;
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }

  .thumbnailContainer {
    position: relative;
    width: fit-content;
    margin: auto;

    div {
      height: 20rem;
    }

    img {
      border-radius: 1rem;
    }

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      border: 0;
      position: absolute;
      z-index: 5;
      font-size: 0;

      transition: filter 0.2s;

      &:first-child {
        left: 0;
        top: 50%;
        background: ${props => props.theme.colors.primary.normal};
        transform: translate(-50%, -50%);
      }

      &:last-child {
        right: 0;
        top: 50%;
        background: ${props => props.theme.colors.secondary};
        transform: translate(50%, -50%);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.background.light};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
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

  .description {
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${props => props.theme.colors.text.dark};

    p {
      margin: 1.5rem 0;
    }
  }
`
