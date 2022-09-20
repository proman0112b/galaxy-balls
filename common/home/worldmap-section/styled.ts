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
  background: url(/assets/images/world-map.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1200px) {
    height: 850px;
  }

  @media screen and (max-width: 1024px) {
    height: 70vw;
  }

  @media screen and (max-width: 426px) {
    height: 277px;
    background: url(/assets/images/world-map-sm.png) no-repeat;
    background-size: 100% 100%;
    top: 150px;
  }
`

export const WorldMapSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 46px;
  }

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

    @media screen and (max-width: 1200px) {
      font-size: 140px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 11.66vw;
      line-height: 11.5vw;
    }

    @media screen and (max-width: 426px) {
      font-size: 32px;
      line-height: 31px;
    }
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

    @media screen and (max-width: 1024px) {
      font-size: 18px;
      width: 98vw;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 25px;
    }

    @media screen and (max-width: 426px) {
      width: 335px;
    }
  }
`

export const DiscoverButton = styled.button`
  outline: none;
  border: none;
  width: 422px;
  height: 185px;
  background: url(/assets/images/discover-btn.png);
  background-size: 100% 100%;
  border-radius: 42px;
  cursor: pointer;
  margin-top: 109px;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 41.2vw;
    height: 18vw;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 31.2vw;
    height: 15vw;
    margin-top: 50px;
  }

  @media screen and (max-width: 426px) {
    width: 159px;
    height: 72px;
    margin-top: 80px;
    border-radius: 12px;
  }
`

export const GrosstessImg = styled.div`
  width: 1200px;
  height: 200px;
  background: url(/assets/images/grosstess.png);
  background-size: 100% 100%;
  margin-top: 70px;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    width: 1000px;
    height: 150px;
  }

  @media screen and (max-width: 1024px) {
    width: 95vw;
    height: 14vw;
    margin-top: 30px;
  }

  @media screen and (max-width: 426px) {
    width: 323px;
    height: 49px;
    margin-top: 50px;
  }
`
