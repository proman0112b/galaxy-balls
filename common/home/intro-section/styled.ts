import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const BgImg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1038px;
  background: url(/assets/images/home/intro-bg1.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1200px) {
    height: 85vw;
  }

  @media screen and (max-width: 768px) {
    background: url(/assets/images/home/intro-bg-sm.png) no-repeat;
    background-size: 120% 100%;
    background-position: center;
    top: 0;
  }

  @media screen and (max-width: 426px) {
    height: 95vw;
  }
`

export const IntroSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 45vw;
  }
`

export const IozvImg = styled.div`
  width: 1164px;
  height: 69px;
  background: url(/assets/images/home/iozv.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    height: 5.75vw;
  }
`

export const LogoImg = styled.div`
  width: 353.61px;
  height: 344.53px;
  background: url(/assets/icons/logo-lg.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1200px) {
    width: 27vw;
    height: 26.3vw;
  }

  @media screen and (max-width: 1024px) {
    width: 25vw;
    height: 24.3vw;
  }
`

export const Title = styled.div`
  margin-left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  p {
    font-family: ${theme.fontFamily.secondary};
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 66px;
    text-align: center;
    letter-spacing: 12px;
    color: rgba(159, 172, 247, 0.6);
    text-shadow: 0px 4px 4px rgba(136, 141, 236, 0.5), 0px 4px 4px #888dec, 0px 4px 4px rgba(136, 141, 236, 0.5);
    filter: blur(1.5px);
    position: relative;

    @media screen and (max-width: 1200px) {
      font-size: 6.5vw;
    }

    @media screen and (max-width: 768px) {
      letter-spacing: 8px;
    }

    @media screen and (max-width: 426px) {
      letter-spacing: 4px;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      color: #b9c3f8;
    }
  }

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`

export const PhoneImg = styled.div`
  margin-top: -90px;
  width: 900px;
  height: 500px;
  background: url(/assets/images/home/phone.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    margin-top: -60px;
    width: 75vw;
    height: 41.66vw;
  }

  @media screen and (max-width: 1024px) {
    margin-top: -50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
