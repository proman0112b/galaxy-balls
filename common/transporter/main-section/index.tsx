import React, { useState } from 'react'
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

const MainSection: React.FC<PageProps> = ({ language }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0)

  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>{trans(language, 'transporter', 'page-title')}</Title>
        <Description>{trans(language, 'transporter', 'desc')}</Description>
        <Content>
          <PhotoWrapper>
            <Image
              src={`/assets/images/transporter/transporter${selectedPhoto}.jpg`}
              alt="no img"
              width={isTablet ? 336 : 655}
              height={isTablet ? 301 : 585}
              priority
            />
            <Photos>
              <Image
                onClick={() => setSelectedPhoto(1)}
                src="/assets/images/transporter/transporter1.jpg"
                alt="no img"
                width={isTablet ? 71 : 140}
                height={isTablet ? 70 : 137}
                priority
              />
              <Image
                onClick={() => setSelectedPhoto(2)}
                src="/assets/images/transporter/transporter2.jpg"
                alt="no img"
                width={isTablet ? 71 : 129}
                height={isTablet ? 70 : 135}
                priority
              />
              <Image
                onClick={() => setSelectedPhoto(3)}
                src="/assets/images/transporter/transporter3.jpg"
                alt="no img"
                width={isTablet ? 71 : 115}
                height={isTablet ? 70 : 135}
                priority
              />
              <Image
                onClick={() => setSelectedPhoto(4)}
                src="/assets/images/transporter/transporter4.jpg"
                alt="no img"
                width={isTablet ? 71 : 120}
                height={isTablet ? 70 : 136}
                priority
              />
            </Photos>
          </PhotoWrapper>
          <PersonalInfo>
            <ContactInfo>
              <span>{trans(language, 'transporter', 'insta-link')}</span>
              <Link href="https://www.instagram.com/besnik_tafallari/?next=%2Fgalaxyballs_official%2F">
                <a target="_blank" rel="noreferrer" style={{ paddingTop: '3px' }}>
                  <AiOutlineInstagram size={20} />
                </a>
              </Link>
            </ContactInfo>
            <h3>{trans(language, 'transporter', 'title')}</h3>
            <p dangerouslySetInnerHTML={{ __html: trans(language, 'transporter', 'details') }}></p>
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
