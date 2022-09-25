import React from 'react'
import { useModal } from '../../../hooks/useModal'
import { BGWrapper, WorldMapSectionContainer, WorldMapSectionWrapper, DiscoverButton, GrosstessImg } from './styled'
import WorldMapModal from '../../animated/world-map'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const WorldMapSection: React.FC = () => {
  const { isShown, toggle } = useModal()
  const { locale } = useRouter()

  return (
    <WorldMapSectionWrapper>
      <BGWrapper />
      <WorldMapSectionContainer>
        <h1>WORLD MAP</h1>
        <p>{trans(locale, 'home', 'world-map-text')}</p>
        <DiscoverButton onClick={toggle}>
          <div className="wrapper">
            <div className="content">Discover the World</div>
          </div>
        </DiscoverButton>
        <GrosstessImg />
      </WorldMapSectionContainer>
      <WorldMapModal isShown={isShown} hide={toggle} />
    </WorldMapSectionWrapper>
  )
}

export default WorldMapSection
