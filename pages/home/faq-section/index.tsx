import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Wrapper from '../../../components/wrapper'
import { FaqSectionContainer, Title, Description, CardList, Card } from './styled'
import { faqStaticData } from '../../../static/faq-static-data'
import type { FaqStaticData } from '../../../types/faq-static-data'

const FaqSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <Wrapper>
      <FaqSectionContainer>
        <Title>FAQ</Title>
        <Description>Hier findest du alle wichtigen und häufig gestellten Fragen.</Description>
        <CardList>
          {faqStaticData.map((data: FaqStaticData, index: number) => (
            <Card key={index} clicked={selectedIndex === index}>
              <div
                onClick={() => {
                  if (selectedIndex === index) setSelectedIndex(-1)
                  else setSelectedIndex(index)
                }}
              >
                {selectedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                <span>{data.title}</span>
              </div>
              <div>{data.description}</div>
            </Card>
          ))}
        </CardList>
      </FaqSectionContainer>
    </Wrapper>
  )
}

export default FaqSection
