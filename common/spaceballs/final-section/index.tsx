import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { FinalSectionContainer, Card, Badge } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const FinalSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const { locale } = useRouter()

  return (
    <Wrapper>
      <FinalSectionContainer>
        <Card>
          <section>
            <div>
              <Badge>{trans(locale, 'space-balls', 'finally')}</Badge>
              <h2>{trans(locale, 'space-balls', 'search-and-enjoy')}</h2>
              <p>{trans(locale, 'space-balls', 'search-and-enjoy-desc')}</p>
            </div>
            <Image src="/assets/images/spaceballs/box.png" alt="no img" width={isTablet ? 261 : 438} height={isTablet ? 261 : 438} />
          </section>
          <h3>{trans(locale, 'space-balls', 'you-can-also')}</h3>
          <section>
            <div>
              <h4>{trans(locale, 'space-balls', 'extend-bag')}</h4>
            </div>
            <div>
              <h4>{trans(locale, 'space-balls', 'get-your-detector')}</h4>
            </div>
            <div>
              <h4>{trans(locale, 'space-balls', 'participate-events')}</h4>
            </div>
          </section>
        </Card>
      </FinalSectionContainer>
    </Wrapper>
  )
}

export default FinalSection
