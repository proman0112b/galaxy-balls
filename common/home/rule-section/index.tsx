import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { RuleSectionContainer, MeteorImg1, MeteorImg2, Title, Description, CardList, CardWrapper, Card } from './styled'

const RuleSection: React.FC = () => {
  return (
    <Wrapper>
      <RuleSectionContainer>
        <MeteorImg1 />
        <MeteorImg2 />
        <Title>Regeln</Title>
        <Description>
          Zu Beginn des Spiels werden 7 Galaxy Balls in einem Land verteilt und der ungefähre Standort wird hier auf der Website unter “WORLD MAP”
          sowie in der GalaxyBalls-App unter “WORLD MAP” veröffentlicht. Mit der GalaxyBalls-App unter “RADAR” können die Kugeln geortet und in der
          näheren Umgebung gefunden werden. Hat man einen GalaxyBalls gefunden, muss der QR-Code auf der Kugel gescannt werden, um als offizieller
          Finder registriert zu werden. Nachdem alle GalaxyBalls gefunden wurden, musst du sie unbeschädigt an einem unserer Standorte abgeben, um
          dein Preisgeld zu erhalten.
        </Description>
        <CardList>
          <CardWrapper>
            <Card>
              <Image src="/assets/icons/key-circle.png" width={42} height={37} layout="fixed" alt="no img" />
              <p>Wenn du einen Galaxy Ball findest, erhältst du 1.000 Euro / USD/ Crypto</p>
            </Card>
          </CardWrapper>
          <CardWrapper style={{ background: '#3283FF11' }}>
            <Card style={{ background: '#3283FF33' }}>
              <Image src="/assets/icons/magic-circle.png" width={42} height={37} layout="fixed" alt="no img" />
              <p>Wenn du alle 7 Galaxy Balls findest, erhältst du sogar 10.000 Euro / USD/ Crypto</p>
            </Card>
          </CardWrapper>
        </CardList>
      </RuleSectionContainer>
    </Wrapper>
  )
}

export default RuleSection
