import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'

import ChangeTheme from '@/assets/sun.svg'

import { useTheme } from '@/contexts/theme'
import { Container } from './styles'

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  const { theme, changeTheme } = useTheme()

  function handleChangeThemeClick() {
    changeTheme(theme.title === 'Dark' ? 'Light' : 'Dark')
  }
  return (
    <Container>
      <Link href="/">
        <img src="/icons/logo.svg" alt="logo" />
      </Link>

      <p>O melhor para você ouvir sempre</p>

      <span>{currentDate}</span>
      <ChangeTheme onClick={handleChangeThemeClick} />
    </Container>
  )
}

export default Header
