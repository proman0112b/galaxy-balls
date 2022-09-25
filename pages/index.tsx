import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import IntroSection from '../common/home/intro-section'
import DownloadSection from '../common/home/dowload-section'
import GameSection from '../common/home/game-section'
import RuleSection from '../common/home/rule-section'
import WorldMapSection from '../common/home/worldmap-section'
import WinnersSection from '../common/home/winners-section'
import ConditionSection from '../common/home/condition-section'
import PrizesSection from '../common/home/prizes-section'
import FaqSection from '../common/home/faq-section'

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter()
  console.log(locale)
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
