import { ReactNode } from 'react'

import { Container } from './styles'

interface PlayerProps {
  children: ReactNode
}

function Player({ children }: PlayerProps) {
  return (
    <Container>
      <header>
        <img src="/icons/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className="emptyPlayer">
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className="empty">
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            <div className="emptySlider" />
          </div>
          <span>00:00</span>
        </div>

        <div className="buttons">
          <button type="button">
            <img src="/icons/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/icons/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className="playButton">
            <img src="/icons/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/icons/play-next.svg" alt="Tocar próximo" />
          </button>
          <button type="button">
            <img src="/icons/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </Container>
  )
}

export default Player
