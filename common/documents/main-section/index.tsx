import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import {
  MainSectionContainer,
  Title,
  Switch,
  SwitchItem,
  DescriptionWrapper,
  Description,
  Number,
  VerticalDivider,
  ImprintDescription,
  ImprintDescriptionWrapper,
} from './styled'

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
        {selectedIndex !== 3 && (
          <DescriptionWrapper>
            <Description>
              <Number selected={true}>1</Number>
              {/* <p>Why chooses the Galaxy Balls?</p> */}
            </Description>
            <VerticalDivider />
            <Description>
              <Number>2</Number>
              {/* <p>why love this App?</p> */}
            </Description>
            <VerticalDivider />
            <Description>
              <Number>3</Number>
              {/* <p> created own team:)</p> */}
            </Description>
          </DescriptionWrapper>
        )}
        {selectedIndex === 3 && (
          <ImprintDescriptionWrapper>
            <div>
              <Number selected={true}></Number>
              <VerticalDivider />
            </div>
            <ImprintDescription>
              P-TRON TECH
              <br /> Baarerstrasse 112
              <br /> 6300 Zug - Swiss
              <br />
              <br /> contact@ptrontech.com
              <br />
              <br /> Handelsregister: CH-242.634.861
              <br /> CH-ID: CH-170-1010871-6
            </ImprintDescription>
          </ImprintDescriptionWrapper>
        )}
      </MainSectionContainer>
    </Wrapper>
  )
}

export default MainSection
