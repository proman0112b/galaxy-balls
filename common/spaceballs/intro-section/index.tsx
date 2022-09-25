import React from 'react'
import Wrapper from '../../../components/wrapper'
import { IntroSectionContainer, BGImg, MeteorImg, TitleContainer, PlayButton } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const IntroSection: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Wrapper>
      <IntroSectionContainer>
        <TitleContainer>
          <MeteorImg />
          <h1>{trans(locale, 'space-balls', 'title')}</h1>
          <p>{trans(locale, 'space-balls', 'desc')}</p>
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
