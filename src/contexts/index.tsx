import React from 'react'

import { ThemeProvider } from './theme'

import { RouterContextProvider } from '@/hooks/useRouter'

import { GlobalProvider } from './global'
import { PlayerProvider } from './player'

import GlobalStyle from '@/styles/GlobalStyle'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterContextProvider>
        <PlayerProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </PlayerProvider>
      </RouterContextProvider>
    </ThemeProvider>
  )
}

export default AppProvider
