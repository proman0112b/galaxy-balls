import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import MainSection from '../../common/documents/main-section'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'

const Documents: NextPage<PageProps> = ({ language }) => {
  return <MainSection language={language} />
}

export default Documents

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
