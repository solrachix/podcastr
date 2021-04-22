import { ReactNode, useEffect, useRef } from 'react'
import Image from 'next/image'

import { usePlayer } from '@/contexts/player'

import { Container, Slider } from './styles'

interface PlayerProps {
  children: ReactNode
}

function Player({ children }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState
  } = usePlayer()

  const episode = episodeList[currentEpisodeIndex]

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <Container>
      <header>
        <img src="/icons/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className="currentEpisode">
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className="emptyPlayer">
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            {episode ? <Slider /> : <div className="emptySlider" />}
          </div>
          <span>00:00</span>
        </div>

        {episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className="buttons">
          <button type="button" disabled={!episode}>
            <img src="/icons/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/icons/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            className="playButton"
            type="button"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/icons/pause.svg" alt="Pausar" />
            ) : (
              <img src="/icons/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <img src="/icons/play-next.svg" alt="Tocar próximo" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/icons/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </Container>
  )
}

export default Player
