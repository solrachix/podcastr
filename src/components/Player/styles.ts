import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 26.5rem;
  height: 100vh;
  padding: 3rem 4rem;

  background: ${props => props.theme.colors.primary.normal};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: ${props => props.theme.font.title};
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }

  .emptyPlayer {
    width: 100%;
    height: 20rem;
    padding: 4rem;

    background: linear-gradient(
      143.8deg,
      ${props => rgba(props.theme.colors.primary.dark, 0.8)} 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 0.1rem dashed ${props => props.theme.colors.primary.lighter};
    border-radius: ${props => props.theme.borderRadius};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .progress {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;

    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }

    .slider {
      flex: 1;

      .emptySlider {
        width: 100%;
        height: 4px;
        background: ${props => props.theme.colors.primary.lighter};
        border-radius: 2px;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
      background: transparent;
      border: 0;
      font-size: 0;

      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: ${props => props.theme.colors.primary.light};
      }
    }
  }
`
