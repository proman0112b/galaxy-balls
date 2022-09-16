import React from 'react'
import Image from 'next/image'
import Wrapper from '../../wrapper'
import DownloadSection from '../../../common/home/dowload-section'
import { FooterContainer, Title, MeteorImg, BGWrapper, Title1, SocialLinks, References } from './styled'

const Footer: React.FC = () => {
  return (
    <Wrapper height={300}>
      <FooterContainer>
        <MeteorImg />
        <Title>available soon</Title>
        <DownloadSection />
      </FooterContainer>
      <BGWrapper>
        <Title1>GALAXYBALLS</Title1>
        <SocialLinks>
          <Image src="/assets/icons/facebook.png" alt="no img" width={39} height={39} layout="fixed" />
          <Image src="/assets/icons/insta.png" alt="no img" width={39} height={39} layout="fixed" />
          <Image src="/assets/icons/twitter.png" alt="no img" width={39} height={39} layout="fixed" />
        </SocialLinks>
        <References>
          <span>Conditions</span>
          <span>Privacy</span>
          <span>Imprint</span>
        </References>
        <label>©2020</label>
      </BGWrapper>
    </Wrapper>
  )
}

export default Footer
