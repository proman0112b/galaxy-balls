import React from 'react'
import { BGWrapper, WorldMapSectionContainer, WorldMapSectionWrapper, DiscoverButton, GrosstessImg } from './styled'

const WorldMapSection: React.FC = () => {
  return (
    <WorldMapSectionWrapper>
      <BGWrapper />
      <WorldMapSectionContainer>
        <h1>WORLD MAP</h1>
        <p>Hier siehst du in welchem Land sich die GalaxyBalls derzeit befinden.</p>
        <p>Du kannst aber auch erfahren in welches zukünftige Land die GalaxyBalls landen werden. </p>
        <DiscoverButton></DiscoverButton>
        <GrosstessImg />
      </WorldMapSectionContainer>
    </WorldMapSectionWrapper>
  )
}

export default WorldMapSection
