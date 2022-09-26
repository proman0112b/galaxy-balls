import React, { useRef } from 'react'
import Carousel from 'react-gallery-carousel'
import type { CarouselRef } from 'react-gallery-carousel'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { ConditionSectionContainer, Title, CarouselWrapper, LeftButton, RightButton } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const ConditionSection: React.FC = () => {
  const images = [
    { src: '/assets/images/home/banner1.jpg' },
    { src: '/assets/images/home/banner2.png' },
    { src: '/assets/images/home/banner3.jpg' },
    { src: '/assets/images/home/banner4.jpg' },
  ]
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const carouselRef = useRef<CarouselRef | null>(null)
  const { locale } = useRouter()

  return (
    <Wrapper>
      <ConditionSectionContainer>
        <Title>{trans(locale, 'home', 'conditions-title')}</Title>
        <p>{trans(locale, 'home', 'conditions-text')}</p>
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
