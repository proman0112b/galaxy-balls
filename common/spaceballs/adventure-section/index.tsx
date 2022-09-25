import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { AdventureSectionContainer, Card, BGImg, Badge } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const AdventureSection: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Wrapper>
      <AdventureSectionContainer>
        <Card>
          <BGImg />
          <Badge>{trans(locale, 'space-balls', 'what-else')}</Badge>
          <h2>{trans(locale, 'space-balls', 'adventure-coming-soon')}</h2>
          <p dangerouslySetInnerHTML={{ __html: trans(locale, 'space-balls', 'adventure-text') }}></p>
        </Card>
      </AdventureSectionContainer>
    </Wrapper>
  )
}

export default AdventureSection
