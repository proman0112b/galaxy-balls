import React from 'react'
import { useModal } from '../../../hooks/useModal'
import { BGWrapper, WorldMapSectionContainer, WorldMapSectionWrapper, DiscoverButton, GrosstessImg } from './styled'
import WorldMapModal from '../../animated/world-map'

const WorldMapSection: React.FC = () => {
  const { isShown, toggle } = useModal()

  return (
    <WorldMapSectionWrapper>
      <BGWrapper />
      <WorldMapSectionContainer>
        <h1>WORLD MAP</h1>
        <p>Hier siehst du in welchem Land sich die GalaxyBalls derzeit befinden.</p>
        <p>Du kannst aber auch erfahren in welches zukünftige Land die GalaxyBalls landen werden. </p>
        <DiscoverButton onClick={toggle}></DiscoverButton>
        <GrosstessImg />
      </WorldMapSectionContainer>
      <WorldMapModal isShown={isShown} hide={toggle} />
    </WorldMapSectionWrapper>
  )
}

export default WorldMapSection
