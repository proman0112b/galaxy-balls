import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { PrizesSectionContainer, Title, Description, BGWrapper } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const PrizesSection: React.FC = () => {
  const { locale } = useRouter()
  return (
    <Wrapper>
      <PrizesSectionContainer>
        <Title>{trans(locale, 'home', 'prize-title')}</Title>
        <Description>{trans(locale, 'home', 'prize-text')}</Description>
        <BGWrapper />
      </PrizesSectionContainer>
    </Wrapper>
  )
}

export default PrizesSection
