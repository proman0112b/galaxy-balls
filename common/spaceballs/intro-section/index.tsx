import React from 'react'
import Wrapper from '../../../components/wrapper'
import { IntroSectionContainer, BGImg, MeteorImg, TitleContainer, PlayButton } from './styled'

const IntroSection: React.FC = () => {
  return (
    <Wrapper>
      <IntroSectionContainer>
        <TitleContainer>
          <MeteorImg />
          <h1>Spaceballs</h1>
          <p>
            The virtual balls from the galaxy are here and waiting for you. Experience unique moments in Augment Realty that you have never seen
            before!
          </p>
          <PlayButton>
            <span>Let&apos;s play</span>
          </PlayButton>
        </TitleContainer>
        <BGImg />
      </IntroSectionContainer>
    </Wrapper>
  )
}

export default IntroSection
