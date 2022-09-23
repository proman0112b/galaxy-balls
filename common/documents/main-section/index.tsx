import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { MainSectionContainer, Title, Switch, SwitchItem, DescriptionWrapper, Description, Number, VerticalDivider } from './styled'

const MainSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1)

  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>Documents</Title>
        <Switch>
          <SwitchItem onClick={() => setSelectedIndex(1)} selected={selectedIndex === 1 ? true : false}>
            Conditions
          </SwitchItem>
          <SwitchItem onClick={() => setSelectedIndex(2)} selected={selectedIndex === 2 ? true : false}>
            Privacy
          </SwitchItem>
          <SwitchItem onClick={() => setSelectedIndex(3)} selected={selectedIndex === 3 ? true : false}>
            Imprint
          </SwitchItem>
        </Switch>
        <DescriptionWrapper>
          <Description>
            <Number selected={true}>1</Number>
            <p>Why chooses the Galaxy Balls?</p>
          </Description>
          <VerticalDivider />
          <Description>
            <Number>2</Number>
            <p>why love this App?</p>
          </Description>
          <VerticalDivider />
          <Description>
            <Number>3</Number>
            <p> created own team:)</p>
          </Description>
        </DescriptionWrapper>
      </MainSectionContainer>
    </Wrapper>
  )
}

export default MainSection
