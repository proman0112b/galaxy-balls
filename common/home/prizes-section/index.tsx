import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { PrizesSectionContainer, Title, Description, BGWrapper } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const PrizesSection: React.FC<PageProps> = ({ language }) => {
  return (
    <Wrapper>
      <PrizesSectionContainer>
        <Title>{trans(language, 'home', 'prize-title')}</Title>
        <Description>{trans(language, 'home', 'prize-text')}</Description>
        <BGWrapper />
      </PrizesSectionContainer>
    </Wrapper>
  )
}

export default PrizesSection
