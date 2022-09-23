/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalProps } from '../../../hooks/useModal'
import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop, AnimatedMapWrapper, LocationList, MarkerWrapper } from './styled'

import { animated, useSpring, useTrail, useTransition } from 'react-spring'

interface Marker {
  color: string
  posX: number
  posY: number
  content: string
  animX: number
  animY: number
}

const markers: Array<Marker> = [
  { color: '255 0 0', posX: 73, posY: 200, animX: 203, animY: 95, content: '' },
  { color: '0 255 0', posX: 31, posY: 430, animX: -60, animY: 135, content: '' },
  { color: '0 0 255', posX: 70, posY: 620, animX: -250, animY: 95, content: '' },
]

const MarkerItem: React.FC<{ sequence: number; marker: Marker; onClick: (e: any) => void; scaled?: boolean }> = ({
  sequence,
  marker,
  onClick,
  scaled,
}) => {
  const styles = useSpring({
    config: { duration: 500 },
    delay: sequence !== -1 ? 1400 + sequence * 300 : 0,
    from: {
      opacity: 0,
    },
    opacity: sequence | 1 ? 1 : 0,
  })

  const [tooltip, setTooltip] = useState<number>(0)

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: `${marker.posX}px`,
        left: `${marker.posY}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...styles,
      }}
      onClick={() => onClick(sequence)}
    >
      <MarkerWrapper color={`rgb(${marker.color})`} tooltip={scaled ? 1 : tooltip}>
        <span>
          <i>Location</i>
          Germany.Berlin
          <i>Rarity</i>
          Low
        </span>
        <div onMouseEnter={() => setTooltip(1)} onMouseLeave={() => setTooltip(0)}></div>
      </MarkerWrapper>
      <div style={{ background: `rgb(${marker.color})`, height: '70px', width: '1px' }}></div>
      <div
        style={{
          width: '10px',
          height: '6px',
          background: `rgb(${marker.color})`,
          borderRadius: '50%',
          boxShadow: `0px 0px 0px 4px rgb(${marker.color} / 30%)`,
        }}
      ></div>
    </animated.div>
  )
}

const IntroAnimation: React.FC<{ open: boolean; onClick: (e: any) => void }> = ({ open, onClick }) => {
  if (!open) return <></>

  const styles = useSpring({
    config: { duration: 300 },
    from: {
      transform: 'scale(2)',
      opacity: 0,
    },

    transform: open ? 'scale(1)' : 'scale(2)',
    opacity: open ? 1 : 0,
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '-10px' }}>
      <AnimatedMapWrapper>
        <animated.div
          style={{
            overflow: 'hidden',
            borderRadius: '16px',
            ...styles,
          }}
        >
          <img src="/assets/images/world-map-1.png" />
        </animated.div>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          {markers.map((marker, index) => (
            <MarkerItem key={index} sequence={index} marker={marker} onClick={onClick} />
          ))}
        </div>
      </AnimatedMapWrapper>
    </div>
  )
}

const MapAnimation: React.FC<{ open: boolean; marker: Marker; onClick: () => void }> = ({ open, marker, onClick }) => {
  if (!open) return <></>

  const mapAnim = useTransition(open, {
    from: { transform: `scale(1) translate3d(0px, 0px, 0)` },
    enter: { transform: `scale(3) translate3d(${marker.animX}px, ${marker.animY}px, 0)` },
    leave: { transform: `scale(1) translate3d(${-marker.animX}px, ${-marker.animY}px, 0)` },
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '-10px' }}>
      <AnimatedMapWrapper>
        {mapAnim((style, item) => {
          if (item) {
            return (
              <animated.div
                style={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  ...style,
                }}
                onClick={onClick}
              >
                <img src="/assets/images/world-map-1.png" />
                <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
                  <MarkerItem sequence={-1} marker={marker} onClick={() => null} scaled={true} />
                </div>
              </animated.div>
            )
          }
        })}
      </AnimatedMapWrapper>
    </div>
  )
}

const Locations: React.FC<{ open: boolean }> = ({ open }) => {
  const items = React.Children.toArray([
    <>
      <span>Germany</span>
      <br />
      <span>Berlin</span>
    </>,
    <></>,
    <></>,
    <></>,
    <></>,
  ])

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
    delay: 500,
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <>
      <span style={{ fontSize: '28px', margin: '30px 0' }}>Location</span>
      <div>
        <LocationList>
          {trail.map(({ height, ...style }, index) => (
            <animated.li key={index} style={style}>
              <animated.div>{items[index]}</animated.div>
            </animated.li>
          ))}
        </LocationList>
      </div>
    </>
  )
}

const WorldMapModal: React.FC<ModalProps> = ({ isShown, hide }) => {
  const [currentAnimation, setCurrentAnimation] = useState<number>(-1)

  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper>
        <StyledModal style={{ display: isShown ? 'block' : 'none' }}>
          <Header>
            <HeaderText>World with Galaxy Balls</HeaderText>
            <CloseButton onClick={hide}>&#10006;</CloseButton>
          </Header>
          <Content>
            <IntroAnimation open={currentAnimation == -1} onClick={e => setCurrentAnimation(e)} />
            <MapAnimation open={currentAnimation != -1} marker={markers[currentAnimation]} onClick={() => setCurrentAnimation(-1)} />
            <Locations open={true} />
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  )

  useEffect(() => {
    setCurrentAnimation(-1)
  }, [isShown])

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default WorldMapModal
