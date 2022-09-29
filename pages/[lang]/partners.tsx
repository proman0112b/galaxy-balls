import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import MainSection from '../../common/partners/main-section'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'

const Partners: NextPage<PageProps> = ({ language }) => {
  return <MainSection language={language} />
}

export default Partners

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
