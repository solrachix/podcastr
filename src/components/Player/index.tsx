import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString'
import { usePlayer } from '@/contexts/player'

import { Container, Slider } from './styles'
import { useSpring } from 'react-spring'

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    hasPrevious,
    hasNext,
    playNext,
    playPrevious,
    isLooping,
    toggleLoop,
    isShuffling,
    toggleShuffle,
    clearPlayerState
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

  function setupProgressListener() {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      if (!audioRef.current) {
        return
      }

      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount

    setProgress(amount)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  const [show, setShow] = useState(true)

  const { transform } = useSpring({
    transform: `translateX(${show ? '0%' : '100%'})`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <Container style={{ transform }}>
      <div className="showButton" onClick={() => setShow(!show)} />

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
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            {episode ? (
              <Slider
                onChange={handleSeek}
                max={episode.duration}
                value={progress}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        {episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            autoPlay
            loop={isLooping}
            onLoadedMetadata={setupProgressListener}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={handleEpisodeEnded}
          />
        )}

        <div className="buttons">
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? 'isActive' : ''}
          >
            <img src="/icons/shuffle.svg" alt="Embaralhar" />
          </button>
          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
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
          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playNext}
          >
            <img src="/icons/play-next.svg" alt="Tocar próximo" />
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? 'isActive' : ''}
          >
            <img src="/icons/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </Container>
  )
}

export default Player
