import styled from 'styled-components'
import theme from '../../../styles/theme'
import Wrapper from '../../../components/wrapper'
import Container from '../../../components/container'

export const WorldMapSectionWrapper = styled(Wrapper)`
  background: linear-gradient(180deg, #191924 0%, rgba(25, 25, 36, 0.06) 100%);
  position: relative;
`

export const BGWrapper = styled(Wrapper)`
  width: 100%;
  height: 922px;
  position: absolute;
  top: 50px;
  background: url(/assets/images/world-map.png);
  background-size: 100% 100%;
`

export const WorldMapSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${theme.fontFamily.secondary};
    font-size: 168px;
    line-height: 165px;
    background: linear-gradient(180deg, #baa2ed 0%, rgba(136, 102, 200, 0.06) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    z-index: 1;
  }

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
    text-align: center;
    color: ${theme.color.typography.primary};
    margin-top: 15px;
    z-index: 1;
  }
`

export const DiscoverButton = styled.button`
  outline: none;
  border: none;
  width: 422px;
  height: 185px;
  background: url(/assets/images/discover-btn.png);
  border-radius: 42px;
  cursor: pointer;
  margin-top: 109px;
  z-index: 1;
`

export const GrosstessImg = styled.div`
  width: 1200px;
  height: 200px;
  background: url(/assets/images/grosstess.png);
  background-size: 100% 100%;
  margin-top: 70px;
  z-index: 1;
`
