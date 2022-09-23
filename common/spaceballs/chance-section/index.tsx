import React from 'react'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import { FiChevronRight } from 'react-icons/fi'
import Wrapper from '../../../components/wrapper'
import { ChanceSectionContainer, Card, CardBody, DoubleArrow, Number } from './styled'

const ChanceSection: React.FC = () => {
  return (
    <Wrapper>
      <ChanceSectionContainer>
        <Card>
          <h2>Your chance to win!</h2>
          <p style={{ marginTop: '10px' }}>Steps</p>
          <CardBody>
            <section>
              <Image src="/assets/icons/find-balls.png" alt="no img" width={128} height={128} />
              <Number>1</Number>
              <p>Find Balls</p>
            </section>
            <DoubleArrow>
              <BiChevronRight />
              <FiChevronRight size={25} />
            </DoubleArrow>
            <section>
              <Image src="/assets/icons/scan.png" alt="no img" width={128} height={128} />
              <Number>2</Number>
              <p>Scan</p>
            </section>
            <DoubleArrow>
              <BiChevronRight />
              <FiChevronRight size={25} />
            </DoubleArrow>
            <section>
              <Image src="/assets/icons/win.png" alt="no img" width={128} height={128} />
              <Number>3</Number>
              <p>Win</p>
            </section>
          </CardBody>
        </Card>
      </ChanceSectionContainer>
    </Wrapper>
  )
}

export default ChanceSection
