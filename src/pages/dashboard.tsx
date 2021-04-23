import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement, useEffect } from 'react'

import api from '@/services/api'

import { convertDurationToTimeString } from './../utils/convertDurationToTimeString'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { usePlayer } from '@/contexts/player'
import { useGlobal } from '@/contexts/global'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Dashboard'

type episode = {
  id: string
  title: string
  members: string
  publishedAt: string
  thumbnail: string
  description: string
  url: string
  duration: number
  durationAsString: string
}

interface HomeStaticProps {
  allEpisodes: Array<episode>
  latestEpisodes: Array<episode>
}

type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function Home({
  allEpisodes,
  latestEpisodes
}: HomeProps): ReactElement {
  const { player, header } = useGlobal()
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

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
      <SEO title="Dashboard" description={'Olá eu sou a description'} />

      <section className="latestEpisodes">
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode, index) => (
            <li key={episode.id}>
              <img
                width={192}
                height={192}
                src={episode.thumbnail}
                alt={episode.title}
                // objectFit="cover"
              />

              <div className="episodeDetails">
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>

              <button
                type="button"
                onClick={() => playList(episodeList, index)}
              >
                <img src="/icons/play-green.svg" alt="Tocar episódio" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="allEpisodes">
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        playList(episodeList, index + latestEpisodes.length)
                      }
                    >
                      <img src="/icons/play-green.svg" alt="Tocar episódio" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 10,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      thumbnail: episode.thumbnail,
      description: episode.description,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url
    }
  })
  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 1000 // uma hora: 60 * 60 * 1
  }
}
