import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'
import Layout from '@/components/Layout'

import Header from '@/components/Header'
import Player from '@/components/Player'

interface GlobalContextData {
  header: {
    activated: boolean
    set(prop: boolean): void
  }
  player: {
    activated: boolean
    set(prop: boolean): void
  }
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [enableHeader, setEnableHeader] = useState(false)
  const [enablePlayer, setEnablePlayer] = useState(false)

  const header = {
    activated: enableHeader,
    set: useCallback((prop: boolean) => {
      !prop
        ? document.querySelector('#__next').classList.add('Header-false')
        : document.querySelector('#__next').classList.remove('Header-false')

      setEnableHeader(prop)
    }, [])
  }

  const player = {
    activated: enablePlayer,
    set: useCallback((prop: boolean) => {
      !prop
        ? document.querySelector('#__next').classList.add('Player-false')
        : document.querySelector('#__next').classList.remove('Player-false')

      setEnablePlayer(prop)
    }, [])
  }

  return (
    <GlobalContext.Provider value={{ header, player }}>
      <Layout>
        <main>
          {enableHeader && <Header />}
          {children}
        </main>

        {enablePlayer && <Player />}
      </Layout>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
