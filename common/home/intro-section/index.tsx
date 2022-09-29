import React from 'react'
import { useRouter } from 'next/router'
import Wrapper from '../../../components/wrapper'
import { BgImg, IntroSectionContainer, IozvImg, LogoImg, Title, PhoneImg } from './styled'

const IntroSection: React.FC<PageProps> = ({ language }) => {
  return (
    <Wrapper>
      <BgImg />
      <IntroSectionContainer>
        <IozvImg src={`/assets/images/home/iozv-${language}.png`} />
        <Title>
          <p>
            <span>Galaxy</span>Galaxy
          </p>
          <LogoImg />
          <p>
            <span>Balls</span>Balls
          </p>
        </Title>
        <PhoneImg />
      </IntroSectionContainer>
    </Wrapper>
  )
}

export default IntroSection
