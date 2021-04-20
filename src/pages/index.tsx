import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { ReactElement } from 'react'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'
import axios from 'axios'

interface HomeStaticProps {
  episodes: any
}
type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function Home({ episodes }: HomeProps): ReactElement {
  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const { data } = await axios.get('http://localhost:3333/episodes')

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}
