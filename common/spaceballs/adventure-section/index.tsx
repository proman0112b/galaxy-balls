import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { AdventureSectionContainer, Card, BGImg, Badge } from './styled'

const AdventureSection: React.FC = () => {
  return (
    <Wrapper>
      <AdventureSectionContainer>
        <Card>
          <BGImg />
          <Badge>What else</Badge>
          <h2>The greatest adventure is coming soon...</h2>
          <p>
            Two games are available in the app and provide more fun and adventure. <br />
            <br />
            The second part of the game is especially interesting for gamers and explorers. Every day new adventures, challenges and very valuable
            SpaceBalls are waiting for you.
            <br />
            <br />
            With some of these Spaceballs you can unlock more game options to increase your level, get ranked and win prizes. Besides, there is also a
            store to help you achieve your goals faster.
          </p>
        </Card>
      </AdventureSectionContainer>
    </Wrapper>
  )
}

export default AdventureSection
