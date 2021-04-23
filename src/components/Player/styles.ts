import styled from 'styled-components'
import { rgba } from 'polished'

import { animated } from 'react-spring'

import slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export const Container = styled(animated.div)`
  position: absolute;
  right: 0;
  width: 26.5rem;
  height: 100vh;
  padding: 3rem 4rem;

  background: ${props => props.theme.colors.primary.normal};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .showButton {
    position: absolute;
    left: 0;
    top: 50%;
    width: 3rem;
    height: 5rem;

    background: ${props => props.theme.colors.primary.normal};
    border-radius: ${props => props.theme.borderRadius};

    transform: translate(-50%, -50%);
  }

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

    &.empty .progress {
      opacity: 0.5;
    }
  }

  .currentEpisode {
    text-align: center;

    img {
      border-radius: 2rem;
    }

    strong {
      font: 600 1.25rem ${props => props.theme.font.title};
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      opacity: 0.6;
      line-height: 1.5rem;
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

      transition: filter 0.2s;
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
      &:hover:not(:disabled) {
        filter: brightness(0.7);
      }

      &.isActive {
        filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
      }

      &.isActive:hover {
        filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
          hue-rotate(100deg);
      }

      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: ${props => props.theme.colors.primary.light};

        &:hover:not(:disabled) {
          filter: brightness(0.95);
        }
      }
    }
  }
`

export const Slider = styled(slider).attrs(() => ({
  trackStyle: { backgroundColor: '#04d361' },
  railStyle: { backgroundColor: '#9f75ff' },
  handleStyle: { borderBlockColor: '#04d361', borderWidth: 4 }
}))``
