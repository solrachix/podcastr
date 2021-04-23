import Link from 'next/link'
import React, { ReactElement } from 'react'

import ChangeTheme from '@/assets/sun.svg'

import SEO from '@/components/SEO'
import Svg from '@/components/Dashboard'
import { Container } from '@/styles/pages/Home'
import { useTheme } from '@/contexts/theme'

export default function Home(): ReactElement {
  const { theme, changeTheme } = useTheme()

  function handleChangeThemeClick() {
    changeTheme(theme.title === 'Dark' ? 'Light' : 'Dark')
  }
  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />

      <header>
        <img src="/icons/simple-logo.svg" alt="logo" />
        <div>
          <Link href="/dashboard">
            <button>Entrar</button>
          </Link>
          <ChangeTheme onClick={handleChangeThemeClick} />
        </div>
      </header>

      <section>
        <span>Podcast Application</span>
        <h1>Podcastr</h1>
        <p>
          Uma plataforma construída para transmissão de um podcast especifico, o
          Faladev da Rocketseat.
        </p>
        <Link href="/dashboard">
          <button>Entrar</button>
        </Link>
      </section>

      <section>
        <Svg className="dashboard" />
      </section>
    </Container>
  )
}
