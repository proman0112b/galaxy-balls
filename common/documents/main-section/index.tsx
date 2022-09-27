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

        {selectedIndex !== 2 && (
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
        )}
        {selectedIndex === 2 && (
          <div style={{ marginTop: '129px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', textAlign: 'center' }}>
            <Description>
              <p>P-TRON TECH </p>
            </Description>
            <Description>
              <p>Baarerstrasse 112</p>
            </Description>
            <Description>
              <p>6300 Zug - Swiss</p>
            </Description>
            <Description>
              <p>contact@ptrontech.com</p>
            </Description>
          </div>
        )}
      </MainSectionContainer>
    </Wrapper>
  )
}

export default MainSection
