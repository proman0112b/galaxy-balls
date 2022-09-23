import type { NextPage } from 'next'
import IntroSection from '../common/spaceballs/intro-section'
import ChanceSection from '../common/spaceballs/chance-section'
import FeaturesSection from '../common/spaceballs/features-section'

const SpaceBalls: NextPage = () => {
  return (
    <>
      <IntroSection />
      <ChanceSection />
      <FeaturesSection />
    </>
  )
}

export default SpaceBalls
