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
  background: url(/assets/images/home/world-map.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1200px) {
    height: 850px;
  }

  @media screen and (max-width: 1024px) {
    height: 70vw;
  }

  @media screen and (max-width: 426px) {
    height: 277px;
    background: url(/assets/images/home/world-map-sm.png) no-repeat;
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
    font-size: 148px;
    line-height: 165px;
    background: linear-gradient(180deg, #baa2ed 0%, rgba(136, 102, 200, 0.06) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    z-index: 1;

    @media screen and (max-width: 1200px) {
      font-size: 120px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 10vw;
      line-height: 11.5vw;
    }

    @media screen and (max-width: 426px) {
      font-size: 32px;
      line-height: 31px;
    }
  }

  p {
    max-width: 960px;
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

export const DiscoverButton = styled.div`
  width: 387px;
  height: 147px;
  background: rgba(99, 47, 255, 0.5);
  border-radius: 30px;
  cursor: pointer;
  margin-top: 109px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 8.34859px 8.34859px 16.6972px rgba(7, 7, 9, 0.662234), -6.26144px -6.26144px 16.6972px rgba(44, 44, 64, 0.480059);
  :hover {
    box-shadow: none;
  }
  .wrapper {
    width: 375px;
    height: 134px;
    background: linear-gradient(135deg, #222236cc -29.19%, #181820cc 70.81%);
    border: 1.04357px solid rgba(122, 82, 251, 0.5);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      width: 342px;
      height: 105px;
      background: linear-gradient(135deg, #2d223699 0%, #18182099 100%);
      border: 1px solid #642bff;
      border-radius: 16px;
      font-family: 'Inter';
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #7a52fb;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1024px) {
        font-size: 2.92vw;
        line-height: 3.51vw;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 37.79vw;
    height: 14.35vw;
    .wrapper {
      width: 36.62vw;
      height: 13.08vw;
      .content {
        width: 33.39vw;
        height: 10.25vw;
      }
    }
    margin-top: 50px;
  }

  @media screen and (max-width: 426px) {
    width: 40.79vw;
    height: 17.35vw;
    border-radius: 12px;
    .wrapper {
      width: 39.62vw;
      height: 16.08vw;
      border-radius: 10px;
      .content {
        width: 36.39vw;
        height: 13.25vw;
        border-radius: 8px;
      }
    }
    margin-top: 80px;
  }
`

export const GrosstessImg = styled.div`
  width: 1200px;
  height: 200px;
  background: url(/assets/images/home/grosstess.png);
  background-size: 100% 100%;
  margin-top: 120px;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    width: 1000px;
    height: 150px;
  }

  @media screen and (max-width: 1024px) {
    width: 95vw;
    height: 14vw;
    margin-top: 80px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 426px) {
    width: 323px;
    height: 49px;
  }
`
