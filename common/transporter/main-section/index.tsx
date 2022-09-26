import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Wrapper from '../../../components/wrapper'
import {
  MainSectionContainer,
  Title,
  Description,
  Content,
  PhotoWrapper,
  Photos,
  PersonalInfo,
  ContactInfo,
  LearnContainer,
  NavigationPrev,
  NavigationNext,
  SwiperWrapper,
} from './styled'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const MainSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const { locale } = useRouter()

  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>{trans(locale, 'transporter', 'page-title')}</Title>
        <Description>{trans(locale, 'transporter', 'desc')}</Description>
        <Content>
          <PhotoWrapper>
            <Image src="/assets/images/transporter/transporter.png" alt="no img" width={isTablet ? 336 : 655} height={isTablet ? 301 : 585} />
            <Photos>
              <Image src="/assets/images/transporter/transporter1.png" alt="no img" width={isTablet ? 71 : 140} height={isTablet ? 70 : 137} />
              <Image src="/assets/images/transporter/transporter2.png" alt="no img" width={isTablet ? 71 : 129} height={isTablet ? 70 : 135} />
              <Image src="/assets/images/transporter/transporter3.png" alt="no img" width={isTablet ? 71 : 115} height={isTablet ? 70 : 135} />
              <Image src="/assets/images/transporter/transporter4.png" alt="no img" width={isTablet ? 71 : 120} height={isTablet ? 70 : 136} />
            </Photos>
          </PhotoWrapper>
          <PersonalInfo>
            <ContactInfo>
              <span>{trans(locale, 'transporter', 'insta-link')}</span>
              <Link href="https://www.instagram.com/besnik_tafallari/?next=%2Fgalaxyballs_official%2F">
                <a target="_blank" rel="noreferrer" style={{ paddingTop: '3px' }}>
                  <AiOutlineInstagram size={20} />
                </a>
              </Link>
            </ContactInfo>
            <h3>{trans(locale, 'transporter', 'title')}</h3>
            <p dangerouslySetInnerHTML={{ __html: trans(locale, 'transporter', 'details') }}></p>
          </PersonalInfo>
        </Content>
      </MainSectionContainer>
      <LearnContainer>
        <h2>Learn more about our transporters</h2>
        <p>Here you will soon see all the missions of the transporter</p>
        <SwiperWrapper>
          <NavigationPrev className="prev">
            <FiChevronLeft size={30} />
          </NavigationPrev>
          <Swiper
            slidesPerView={isTablet ? 1 : 2}
            spaceBetween={isTablet ? 40 : 87}
            className="mySwiper"
            loop
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
          >
            <SwiperSlide />
            <SwiperSlide />
            <SwiperSlide />
            <SwiperSlide />
          </Swiper>
          <NavigationNext className="next">
            <FiChevronRight size={30} />
          </NavigationNext>
        </SwiperWrapper>
      </LearnContainer>
    </Wrapper>
  )
}

export default MainSection
