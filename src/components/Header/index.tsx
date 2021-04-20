import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from './styles'

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  return (
    <Container>
      <img src="/icons/logo.svg" alt="logo" />

      <p>O melhor para você ouvir sempre</p>

      <span>{currentDate}</span>
    </Container>
  )
}

export default Header
