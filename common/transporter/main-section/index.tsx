import React from 'react'
import Image from 'next/image'
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

const MainSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>transporter</Title>
        <Description>A difficult task can only be undertaken by someone with sufficient experience.</Description>
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
              <span>Galaxy-Transporter</span>
              <AiOutlineInstagram size={20} />
            </ContactInfo>
            <h3>Our official Transporter of GalaxyBalls</h3>
            <p>
              He is a master of transportation.
              <br />
              <br /> His job is to move the GalaxyBalls from one country to another which he has done dozens of times.He knows exactly what he is
              doing. He makes sure that the games will run safely and that the rules are followed.
              <br />
              <br /> For this reason we have hired a transporter as our agent for the distribution of the balls. He alone will make sure that the
              GalaxyBalls come to you. If you find one of them, you will also meet the transporter.
            </p>
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
