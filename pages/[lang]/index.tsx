import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import IntroSection from '../../common/home/intro-section'
import DownloadSection from '../../common/home/dowload-section'
import GameSection from '../../common/home/game-section'
import RuleSection from '../../common/home/rule-section'
import WorldMapSection from '../../common/home/worldmap-section'
import WinnersSection from '../../common/home/winners-section'
import ConditionSection from '../../common/home/condition-section'
import PrizesSection from '../../common/home/prizes-section'
import FaqSection from '../../common/home/faq-section'

import { getAllLanguageSlugs, getLanguage } from '../../i18n'

const Home: NextPage<PageProps> = ({ language }) => {
  return (
    <>
      <IntroSection language={language} />
      <DownloadSection language={language} />
      <GameSection language={language} />
      <RuleSection language={language} />
      <WorldMapSection language={language} />
      <WinnersSection language={language} />
      <ConditionSection language={language} />
      <PrizesSection language={language} />
      <FaqSection language={language} />
    </>
  )
}

export default Home

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const language = getLanguage(params?.lang)
  return {
    props: {
      language,
    },
  }
}
