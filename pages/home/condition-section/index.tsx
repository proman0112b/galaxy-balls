import React, { useState, useRef } from 'react'
import Carousel from 'react-gallery-carousel'
import type { CarouselRef } from 'react-gallery-carousel'
import Wrapper from '../../../components/wrapper'
import { ConditionSectionContainer, Title, CarouselWrapper, LeftButton, RightButton } from './styled'

const ConditionSection: React.FC = () => {
  const images = [
    { src: '/assets/images/banner 1.png' },
    { src: '/assets/images/banner2.png' },
    { src: '/assets/images/banner3.png' },
    { src: '/assets/images/banner4.png' },
  ]
  const carouselRef = useRef<CarouselRef | null>(null)

  return (
    <Wrapper>
      <ConditionSectionContainer>
        <Title>Die Bedingung für den Start eines Spiels</Title>
        <p>
          Lade die GalaxyBalls-App herunter und registriere dich mit deiner E-Mail-Adresse. Dann musst du nur noch 5 Spaceballs (virtuelle Bälle)
          finden, um dein GalaxyRadar vollständig zu aktivieren und schon kannst du loslegen.
        </p>
        <CarouselWrapper>
          <Carousel
            className="Carousel"
            images={images}
            hasLeftButton={false}
            hasRightButton={false}
            hasIndexBoard={false}
            hasMediaButton={false}
            hasSizeButton={false}
            canAutoPlay={false}
            ref={carouselRef}
          />
          <LeftButton onClick={() => carouselRef.current?.goLeft()}>‹</LeftButton>
          <RightButton onClick={() => carouselRef.current?.goRight()}>›</RightButton>
        </CarouselWrapper>
      </ConditionSectionContainer>
    </Wrapper>
  )
}

export default ConditionSection
