import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { ValueSectionContainer, CardList, Card, Description } from './styled'

const ValueSection: React.FC = () => {
  return (
    <Wrapper>
      <ValueSectionContainer>
        <CardList>
          <Card>
            <Description>
              <h4>Rankinglist</h4>
              <p>Be entered in the rankinglist so that everyone can see you.</p>
            </Description>
            <Image src="/assets/images/spaceballs/rankinglist.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>Chat</h4>
              <p>Chat with your team and with other users worldwide</p>
            </Description>
            <Image src="/assets/images/spaceballs/chat.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>Team</h4>
              <p>
                Form a team to search for the SpaceBalls and GalaxyBalls. This will increase your chance to find all the balls even faster and more
                efficiently.
              </p>
            </Description>
            <Image src="/assets/images/spaceballs/team.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>Winners</h4>
              <p>Win great prizes. The more balls you find, the bigger your gifts will be.</p>
            </Description>
            <Image src="/assets/images/spaceballs/winners.png" alt="no img" width={256} height={256} />
          </Card>
        </CardList>
      </ValueSectionContainer>
    </Wrapper>
  )
}

export default ValueSection
