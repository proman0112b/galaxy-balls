import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { PrizesSectionContainer, Title, Description, BGWrapper } from './styled'

const PrizesSection: React.FC = () => {
  return (
    <Wrapper>
      <PrizesSectionContainer>
        <Title>Deine Preise warten auf dich</Title>
        <Description>
          Viele galaktische Kugeln nähern sich bereits der Erde.
          <br /> Sei unter den Ersten, die sich auf die Suche nach ihnen macht und erhalte eine Galaktische Belohnung!
        </Description>
        <BGWrapper />
      </PrizesSectionContainer>
    </Wrapper>
  )
}

export default PrizesSection
