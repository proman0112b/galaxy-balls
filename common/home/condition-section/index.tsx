import React, { useRef } from 'react'
import Carousel from 'react-gallery-carousel'
import type { CarouselRef } from 'react-gallery-carousel'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { ConditionSectionContainer, Title, CarouselWrapper, LeftButton, RightButton } from './styled'

const ConditionSection: React.FC = () => {
  const images = [
    { src: '/assets/images/home/banner 1.png' },
    { src: '/assets/images/home/banner2.png' },
    { src: '/assets/images/home/banner3.png' },
    { src: '/assets/images/home/banner4.png' },
  ]
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
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
          {isTablet ? (
            <div style={{ display: 'flex', gap: '34px' }}>
              <LeftButton onClick={() => carouselRef.current?.goLeft()}>‹</LeftButton>
              <RightButton onClick={() => carouselRef.current?.goRight()}>›</RightButton>
            </div>
          ) : (
            <>
              <LeftButton onClick={() => carouselRef.current?.goLeft()}>‹</LeftButton>
              <RightButton onClick={() => carouselRef.current?.goRight()}>›</RightButton>
            </>
          )}
        </CarouselWrapper>
      </ConditionSectionContainer>
    </Wrapper>
  )
}

export default ConditionSection
