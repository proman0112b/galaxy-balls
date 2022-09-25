import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { MoreSectionContainer, SwiperWrapper, NavigationNext, NavigationPrev, ComingSoonImg } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const MoreSection: React.FC = () => {
  const [perView, setPerView] = useState<number>(3)
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { locale } = useRouter()

  useEffect(() => {
    if (isTablet && isMobile) setPerView(1)
    if (isTablet && !isMobile) setPerView(2)
  }, [isTablet, isMobile])

  return (
    <Wrapper>
      <MoreSectionContainer>
        <h2>{trans(locale, 'space-balls', 'more-about')}</h2>
        <p>{trans(locale, 'space-balls', 'more-about-text')}</p>
        <SwiperWrapper>
          <NavigationPrev className="prev">
            <FiChevronLeft size={30} />
          </NavigationPrev>
          <Swiper
            slidesPerView={perView}
            spaceBetween={34}
            className="mySwiper"
            loop
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <ComingSoonImg />
              <span>Spaceblue</span>
            </SwiperSlide>
            <SwiperSlide>
              <ComingSoonImg />
              <span>Spacegreen</span>
            </SwiperSlide>
            <SwiperSlide>
              <ComingSoonImg />
              <span>Spacered</span>
            </SwiperSlide>
          </Swiper>
          <NavigationNext className="next">
            <FiChevronRight size={30} />
          </NavigationNext>
        </SwiperWrapper>
      </MoreSectionContainer>
    </Wrapper>
  )
}

export default MoreSection
