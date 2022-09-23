import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../wrapper'
import DownloadSection from '../../../common/home/dowload-section'
import { FooterContainer, Title, MeteorImg, BGWrapper, Title1, SocialLinks, References } from './styled'

const Footer: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

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
          {isTablet && !isMobile && (
            <>
              <Image src="/assets/icons/facebook.png" alt="no img" width={25} height={25} layout="fixed" />
              <Image src="/assets/icons/insta.png" alt="no img" width={25} height={25} layout="fixed" />
              <Image src="/assets/icons/twitter.png" alt="no img" width={25} height={25} layout="fixed" />
            </>
          )}
          {!isTablet && !isMobile && (
            <>
              <Image src="/assets/icons/facebook.png" alt="no img" width={39} height={39} layout="fixed" />
              <Image src="/assets/icons/insta.png" alt="no img" width={39} height={39} layout="fixed" />
              <Image src="/assets/icons/twitter.png" alt="no img" width={39} height={39} layout="fixed" />
            </>
          )}
          {isMobile && (
            <>
              <Image src="/assets/icons/facebook.png" alt="no img" width={13.84} height={13.84} layout="fixed" />
              <Image src="/assets/icons/insta.png" alt="no img" width={13.84} height={13.84} layout="fixed" />
              <Image src="/assets/icons/twitter.png" alt="no img" width={13.84} height={13.84} layout="fixed" />
            </>
          )}
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
