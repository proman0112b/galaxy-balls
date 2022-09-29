import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { FeaturesSectionContainer, Feature, BallImg1, BallImg2, Content, CardList, Card } from './styled'
import type { FeatureStaticData } from '../../../types/feature-static-data'
import { featureStaticData } from '../../../static/feature-static-data'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const FeaturesSection: React.FC<PageProps> = ({ language }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1300px)' })

  return (
    <Wrapper>
      <FeaturesSectionContainer>
        <Feature>
          <BallImg1 />
          <Content>
            <h1>{trans(language, 'space-balls', 'about-space-balls')}</h1>
            <p>{trans(language, 'space-balls', 'about-text')}</p>
            <CardList>
              {featureStaticData.map((data: FeatureStaticData, index: number) => {
                if (index < 3)
                  return (
                    <Card key={index} selected={index % 3 === 0 ? true : false}>
                      <data.icon size={data.iconSize} />
                      <span>{trans(language, 'space-balls', `about-desc-${index + 1}`)}</span>
                    </Card>
                  )
              })}
            </CardList>
          </Content>
        </Feature>
        <Feature>
          <Content>
            <h1>{trans(language, 'space-balls', 'find-a-ball')}</h1>
            <p>{trans(language, 'space-balls', 'find-a-ball-text')}</p>
            <CardList>
              {featureStaticData.map((data: FeatureStaticData, index: number) => {
                if (index > 2)
                  return (
                    <Card key={index} selected={index % 3 === 0 ? true : false}>
                      <data.icon size={data.iconSize} />
                      <span>{trans(language, 'space-balls', `find-desc-${index + 1}`)}</span>
                    </Card>
                  )
              })}
            </CardList>
          </Content>
          <BallImg2 />
        </Feature>
      </FeaturesSectionContainer>
    </Wrapper>
  )
}

export default FeaturesSection
