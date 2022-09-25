import type { NextPage } from 'next'
import IntroSection from '../common/spaceballs/intro-section'
import ChanceSection from '../common/spaceballs/chance-section'
import FeaturesSection from '../common/spaceballs/features-section'
import AdventureSection from '../common/spaceballs/adventure-section'
import ValueSection from '../common/spaceballs/value-section'
import FinalSection from '../common/spaceballs/final-section'
import MoreSection from '../common/spaceballs/more-section'

const SpaceBalls: NextPage = () => {
  return (
    <>
      <IntroSection />
      <ChanceSection />
      <FeaturesSection />
      <AdventureSection />
      <ValueSection />
      <FinalSection />
      <MoreSection />
    </>
  )
}

export default SpaceBalls
