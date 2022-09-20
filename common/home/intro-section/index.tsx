import React from 'react'
import Wrapper from '../../../components/wrapper'
import { BgImg, IntroSectionContainer, IozvImg, LogoImg, Title, PhoneImg } from './styled'

const IntroSection: React.FC = () => {
  return (
    <Wrapper>
      <BgImg />
      <IntroSectionContainer>
        <IozvImg />
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
