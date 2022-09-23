import React from 'react'
import Image from 'next/image'
import { useModal } from '../../../hooks/useModal'
import Wrapper from '../../../components/wrapper'
import { WinnersSectionContainer, Title, Description, Tip, ListButton, MeteorImg, WinnersList } from './styled'

import WinnersModal from '../../animated/winners'

const WinnersSection: React.FC = () => {
  const { isShown, toggle } = useModal()

  return (
    <Wrapper>
      <WinnersSectionContainer>
        <MeteorImg />
        <div>
          <Title>Winners</Title>
          <Description>
            <p>
              Hier findest du alle Gewinner, die einen GalaxyBalls in deinem Land gefunden haben. Finde die Kugeln und werde in die Rangliste
              aufgenommen, umso mehr Kugeln du findest, desto mehr Einträge bekommst du!
            </p>
            <Tip style={{ marginTop: '60.1px' }}>
              <Image src="/assets/icons/tip1.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FE6A88' }}>Garantierte Auszahlung von Gewinnen</span>
            </Tip>
            <Tip style={{ marginTop: '28.3px' }}>
              <Image src="/assets/icons/tip2.png" width={44.55} height={44.55} layout="fixed" alt="no img" />
              <span style={{ color: '#FEA500' }}>Alle Regeln findest du in unseren Teilnahmebedingungen</span>
            </Tip>
            <ListButton onClick={toggle}>Vollständige Liste</ListButton>
          </Description>
        </div>
        <WinnersList />
        <WinnersModal isShown={isShown} hide={toggle} />
      </WinnersSectionContainer>
    </Wrapper>
  )
}

export default WinnersSection
