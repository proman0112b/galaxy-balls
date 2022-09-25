import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { FinalSectionContainer, Card, Badge } from './styled'

const FinalSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Wrapper>
      <FinalSectionContainer>
        <Card>
          <section>
            <div>
              <Badge>Finally</Badge>
              <h2>Search and enjoy !</h2>
              <p>
                Discover many treasures hidden in each SpaceBall. Great surprises are waiting for you that you have never seen before. Go alone or
                with your friends on the hunt for many galactic balls and fill your treasure chest. Check the app daily to never miss an opportunity.
              </p>
            </div>
            <Image src="/assets/images/spaceballs/box.png" alt="no img" width={isTablet ? 261 : 438} height={isTablet ? 261 : 438} />
          </section>
          <h3>You can also...</h3>
          <section>
            <div>
              <h4>Extend your bag to collect more spaceballs</h4>
            </div>
            <div>
              <h4>Get your detector and find the rest of the spaceballs</h4>
            </div>
            <div>
              <h4>Participate in special events to find rare SpaceBalls</h4>
            </div>
          </section>
        </Card>
      </FinalSectionContainer>
    </Wrapper>
  )
}

export default FinalSection
