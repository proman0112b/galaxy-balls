import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import IntroSection from '../../common/spaceballs/intro-section'
import ChanceSection from '../../common/spaceballs/chance-section'
import FeaturesSection from '../../common/spaceballs/features-section'
import AdventureSection from '../../common/spaceballs/adventure-section'
import ValueSection from '../../common/spaceballs/value-section'
import FinalSection from '../../common/spaceballs/final-section'
import MoreSection from '../../common/spaceballs/more-section'

import { getAllLanguageSlugs, getLanguage } from '../../i18n'

const SpaceBalls: NextPage<PageProps> = ({ language }) => {
  return (
    <>
      <IntroSection language={language} />
      <ChanceSection language={language} />
      <FeaturesSection language={language} />
      <AdventureSection language={language} />
      <ValueSection language={language} />
      <FinalSection language={language} />
      <MoreSection language={language} />
    </>
  )
}

export default SpaceBalls

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
