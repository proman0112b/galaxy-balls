import type { NextPage } from 'next'
import IntroSection from './home/intro-section'
import DownloadSection from './home/dowload-section'
import GameSection from './home/game-section'
import RuleSection from './home/rule-section'
import WorldMapSection from './home/worldmap-section'
import WinnersSection from './home/winners-section'
import ConditionSection from './home/condition-section'
import PrizesSection from './home/prizes-section'
import FaqSection from './home/faq-section'

const Home: NextPage = () => {
  return (
    <>
      <IntroSection />
      <DownloadSection />
      <GameSection />
      <RuleSection />
      <WorldMapSection />
      <WinnersSection />
      <ConditionSection />
      <PrizesSection />
      <FaqSection />
    </>
  )
}

export default Home
