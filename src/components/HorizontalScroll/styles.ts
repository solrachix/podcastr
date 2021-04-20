import styled from 'styled-components'

interface TallOuterContainerProps {
  dynamicHeight: number
}
export const TallOuterContainer = styled.div.attrs<TallOuterContainerProps>(
  ({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
  })
)<TallOuterContainerProps>`
  position: relative;
  width: 100%;
`

export const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

interface HorizontalTranslateContainerProps {
  translateX: number
}
export const HorizontalTranslateContainer = styled.div.attrs<HorizontalTranslateContainerProps>(
  ({ translateX }) => ({
    style: { transform: `translateX(${translateX}px)` }
  })
)<HorizontalTranslateContainerProps>`
  position: absolute;
  height: 100%;
  will-change: transform;
`
