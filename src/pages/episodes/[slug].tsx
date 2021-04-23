import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import api from '../../services/api'
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString'

import { useGlobal } from '@/contexts/global'
import { usePlayer } from '@/contexts/player'

import { Container } from '@/styles/pages/Episode'

type Episode = {
  id: string
  title: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  url: string
  publishedAt: string
  description: string
}

type EpisodeProps = {
  episode: Episode
}

export default function Episode({ episode }: EpisodeProps) {
  const { player, header } = useGlobal()
  const { play } = usePlayer()

  useEffect(() => {
    player.set(true)
    header.set(true)
    return () => {
      player.set(false)
      header.set(false)
    }
  }, [])

  return (
    <Container>
      <div className="thumbnailContainer">
        <Link href="/dashboard">
          <button type="button">
            <img src="/icons/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />
        <button type="button" onClick={() => play(episode)}>
          <img src="/icons/play.svg" alt="Tocar episódio" />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map(episode => ({
    params: { slug: episode.id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24
  }
}
