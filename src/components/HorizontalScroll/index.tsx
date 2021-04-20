import React, { useState, useEffect, useRef, ReactElement } from 'react'

import {
  TallOuterContainer,
  StickyInnerContainer,
  HorizontalTranslateContainer
} from './styles'

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth
  const dynamicHeight = calcDynamicHeight(objectWidth)
  setDynamicHeight(dynamicHeight)
}

const applyScrollListener = (ref, setTranslateX) => {
  const layout = document.querySelector('#layout') as HTMLDivElement
  layout.addEventListener('scroll', () => {
    const offsetTop = -ref?.current?.offsetTop
    setTranslateX(offsetTop)
  })
}

export default function HorizontalScroll({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const containerRef = useRef(null)
  const objectRef = useRef(null)

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener('resize', resizeHandler)
    applyScrollListener(containerRef, setTranslateX)
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}
