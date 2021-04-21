import React from 'react'

import { ThemeProvider } from './theme'

import { RouterContextProvider } from '@/hooks/useRouter'

import { GlobalProvider } from './global'

import GlobalStyle from '@/styles/GlobalStyle'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterContextProvider>
        <GlobalProvider>{children}</GlobalProvider>
      </RouterContextProvider>
    </ThemeProvider>
  )
}

export default AppProvider
