import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Wrapper from '../../../components/wrapper'
import { FaqSectionContainer, Title, Description, CardListWrapper, CardList, Card } from './styled'
import { faqStaticData } from '../../../static/faq-static-data'
import type { FaqStaticData } from '../../../types/faq-static-data'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const FaqSection: React.FC<PageProps> = ({ language }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <Wrapper>
      <FaqSectionContainer>
        <Title>{trans(language, 'home', 'faq-title')}</Title>
        <Description>{trans(language, 'home', 'faq-description')}</Description>
        <CardListWrapper>
          <CardList>
            {faqStaticData.map((data: FaqStaticData, index: number) => {
              if (index % 2 === 0)
                return (
                  <Card key={index} clicked={selectedIndex === index}>
                    <div
                      onClick={() => {
                        if (selectedIndex === index) setSelectedIndex(-1)
                        else setSelectedIndex(index)
                      }}
                    >
                      {selectedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      <span>{trans(language, 'home', `question-description-${index + 1}`)}</span>
                    </div>
                    <div>{trans(language, 'home', `answer-description-${index + 1}`)}</div>
                  </Card>
                )
            })}
          </CardList>
          <CardList>
            {faqStaticData.map((data: FaqStaticData, index: number) => {
              if (index % 2 === 1)
                return (
                  <Card key={index} clicked={selectedIndex === index}>
                    <div
                      onClick={() => {
                        if (selectedIndex === index) setSelectedIndex(-1)
                        else setSelectedIndex(index)
                      }}
                    >
                      {selectedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      <span>{trans(language, 'home', `question-description-${index + 1}`)}</span>
                    </div>
                    <div>{trans(language, 'home', `answer-description-${index + 1}`)}</div>
                  </Card>
                )
            })}
          </CardList>
        </CardListWrapper>
      </FaqSectionContainer>
    </Wrapper>
  )
}

export default FaqSection
