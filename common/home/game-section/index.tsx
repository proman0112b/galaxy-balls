import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { Title, GameSectionContainer, Card } from './styled'

const GameSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>Für Spieler</Title>
      <GameSectionContainer>
        <Card>
          <Image src="/assets/icons/winner.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#3FBE96' }}>Winner prize</label>
          <p>Find all 7 Galaxy Balls in your country and win 10.000 € /$</p>
        </Card>
        <Card>
          <Image src="/assets/icons/team.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#3F73FF' }}>Team bilden</label>
          <p>
            Die Galaxy Balls sind im ganzen Land verteilt. Bildet ein Team und geht mit Freunden auf eine abenteuerliche Suche um eure Chancen zu
            erhöhen mehrere Galaxy-Balls zu finden und gewinnt den Höchstpreis von 10.000 € /$
          </p>
        </Card>
        <Card>
          <Image src="/assets/icons/price.png" width={161} height={161} layout="fixed" alt="no img" />
          <label style={{ color: '#BE4CFF' }}>Preis für jede Kugel</label>
          <p>Für jeden Galaxy Ball, den du findest, erhältst du 1.000 € /$</p>
        </Card>
      </GameSectionContainer>
    </Wrapper>
  )
}

export default GameSection
