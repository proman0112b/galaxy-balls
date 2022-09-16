import React from 'react'
import Image from 'next/image'
import { IntroSectionWrapper, IntroSectionContainer, IozvImg, Title, PhoneImg } from './styled'

const IntroSection: React.FC = () => {
  return (
    <IntroSectionWrapper>
      <IntroSectionContainer>
        <IozvImg />
        <Title>
          <p>
            <span>Galaxy</span>Galaxy
          </p>
          <Image src="/assets/icons/logo-lg.png" width={353.61} height={344.53} layout="fixed" alt="no img" />
          <p>
            <span>Balls</span>Balls
          </p>
        </Title>
        <PhoneImg />
      </IntroSectionContainer>
    </IntroSectionWrapper>
  )
}

export default IntroSection
