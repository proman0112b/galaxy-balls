import React from 'react'
import Image from 'next/image'
import { useModal } from '../../../hooks/useModal'
import { useMediaQuery } from 'react-responsive'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Wrapper from '../../../components/wrapper'
import {
  WinnersSectionContainer,
  Title,
  Description,
  Tip,
  ListButton,
  MeteorImg,
  WinnersList,
  WinnerTable,
  WinnersListButton,
  Rectangle1,
  Rectangle2,
} from './styled'
import type { WinnerlistStaticData } from '../../../types/winnerlist-static-data'
import { winnerlistStaticData } from '../../../static/winnerlist-static-data'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

import WinnersModal from '../../animated/winners'

const WinnersSection: React.FC = () => {
  const { isShown, toggle } = useModal()
  const isTablet = useMediaQuery({ query: '(max-width: 1300px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  const { locale } = useRouter()

  return (
    <Wrapper id="winner">
      <WinnersSectionContainer>
        <MeteorImg />
        <section>
          <Title>{trans(locale, 'home', 'winners-title')}</Title>
          <Description>
            <p>{trans(locale, 'home', 'winners-text')}</p>
            {isTablet && !isMobile && (
              <WinnersList>
                <WinnersListButton onClick={toggle}>
                  <div className="wrapper">
                    <span>Show all Winners</span>
                  </div>
                </WinnersListButton>
              </WinnersList>
            )}
            {isMobile && (
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <WinnersListButton onClick={toggle}>
                  <div className="wrapper">
                    <span>Show all Winners</span>
                  </div>
                </WinnersListButton>
                <WinnerTable>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Finder name</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winnerlistStaticData.map((data: WinnerlistStaticData, index: number) => (
                      <tr key={index}>
                        <td style={{ color: `${data.color}` }}>{data.id}</td>
                        <td style={{ color: `${data.color}` }}>{data.name}</td>
                        <td>
                          <div>
                            <FaFacebookF />
                          </div>
                          <div>
                            <AiFillInstagram />
                          </div>
                          <div>
                            <AiOutlineTwitter />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </WinnerTable>
                <Rectangle1 />
                <Rectangle2 />
              </div>
            )}
            <Tip style={{ marginTop: '60.1px' }}>
              <Image src="/assets/icons/tip1.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FE6A88' }}>{trans(locale, 'home', 'winners-text-1')}</span>
            </Tip>
            <Tip style={{ marginTop: '28.3px' }}>
              <Image src="/assets/icons/tip2.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FEA500' }}>{trans(locale, 'home', 'winners-text-2')}</span>
            </Tip>
            <ListButton onClick={toggle}>{trans(locale, 'home', 'winners-button')}</ListButton>
          </Description>
        </section>
        {!isTablet && (
          <WinnersList>
            <WinnersListButton onClick={toggle}>
              <div className="wrapper">
                <span>Show all Winners</span>
              </div>
            </WinnersListButton>
          </WinnersList>
        )}
        <WinnersModal isShown={isShown} hide={toggle} />
      </WinnersSectionContainer>
    </Wrapper>
  )
}

export default WinnersSection
