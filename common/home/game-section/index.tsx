import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { Title, GameSectionContainer, Card } from './styled'
import { trans } from '../../../utils/i18n'

const GameSection: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Wrapper id="start">
      <Title>{trans(locale, 'home', 'for-players')}</Title>
      <GameSectionContainer>
        <Card>
          <Image src="/assets/icons/winner.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#3FBE96' }}>{trans(locale, 'home', 'winner-prize')}</label>
          <p>{trans(locale, 'home', 'winner-prize-text')}</p>
        </Card>
        <Card>
          <Image src="/assets/icons/team.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#3F73FF' }}>{trans(locale, 'home', 'form-team')}</label>
          <p>{trans(locale, 'home', 'form-team-text')}</p>
        </Card>
        <Card>
          <Image src="/assets/icons/price.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#BE4CFF' }}>{trans(locale, 'home', 'price')}</label>
          <p>{trans(locale, 'home', 'price-text')}</p>
        </Card>
      </GameSectionContainer>
    </Wrapper>
  )
}

export default GameSection
