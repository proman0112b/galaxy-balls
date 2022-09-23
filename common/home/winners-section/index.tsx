import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Wrapper from '../../../components/wrapper'
import { WinnersSectionContainer, Title, Description, Tip, ListButton, MeteorImg, WinnersList, WinnerTable } from './styled'
import type { WinnerlistStaticData } from '../../../types/winnerlist-static-data'
import { winnerlistStaticData } from '../../../static/winnerlist-static-data'

const WinnersSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1300px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

  return (
    <Wrapper>
      <WinnersSectionContainer>
        <MeteorImg />
        <section>
          <Title>Winners</Title>
          <Description>
            <p>
              Hier findest du alle Gewinner, die einen GalaxyBalls in deinem Land gefunden haben. Finde die Kugeln und werde in die Rangliste
              aufgenommen, umso mehr Kugeln du findest, desto mehr Einträge bekommst du!
            </p>
            {isTablet && !isMobile && <WinnersList />}
            {isMobile && (
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
            )}
            <Tip style={{ marginTop: '60.1px' }}>
              <Image src="/assets/icons/tip1.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FE6A88' }}>Garantierte Auszahlung von Gewinnen</span>
            </Tip>
            <Tip style={{ marginTop: '28.3px' }}>
              <Image src="/assets/icons/tip2.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FEA500' }}>Alle Regeln findest du in unseren Teilnahmebedingungen</span>
            </Tip>
            <ListButton>Vollständige Liste</ListButton>
          </Description>
        </section>
        {!isTablet && <WinnersList />}
      </WinnersSectionContainer>
    </Wrapper>
  )
}

export default WinnersSection
