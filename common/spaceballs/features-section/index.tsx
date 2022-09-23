import React from 'react'
import Wrapper from '../../../components/wrapper'
import { FeaturesSectionContainer, Feature, BallImg1, BallImg2, Content, CardList, Card } from './styled'
import type { FeatureStaticData } from '../../../types/feature-static-data'
import { featureStaticData } from '../../../static/feature-static-data'

const FeaturesSection: React.FC = () => {
  return (
    <Wrapper>
      <FeaturesSectionContainer>
        <Feature style={{ gap: '145px' }}>
          <BallImg1 />
          <Content>
            <h1>Something about SpaceBalls</h1>
            <p>Three things you should know about the SpaceBalls</p>
            <CardList>
              {featureStaticData.map((data: FeatureStaticData, index: number) => {
                if (index < 3)
                  return (
                    <Card key={index} selected={index % 3 === 0 ? true : false}>
                      <data.icon size={data.iconSize} />
                      <span>{data.description}</span>
                    </Card>
                  )
              })}
            </CardList>
          </Content>
        </Feature>
        <Feature style={{ marginTop: '144.5px', gap: '102px' }}>
          <Content>
            <h1>What happens when you find a SpaceBall?</h1>
            <p>Three other important things you should know</p>
            <CardList>
              {featureStaticData.map((data: FeatureStaticData, index: number) => {
                if (index > 2)
                  return (
                    <Card key={index} selected={index % 3 === 0 ? true : false}>
                      <data.icon size={data.iconSize} />
                      <span>{data.description}</span>
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
