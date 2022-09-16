import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'
import Wrapper from '../../../components/wrapper'

export const IntroSectionWrapper = styled(Wrapper)`
  height: 1055px;
  background: url(/assets/images/intro-bg.png) no-repeat;
  background-size: 100% 100%;
  margin-top: -180px;
  margin-bottom: 20px;
`

export const IntroSectionContainer = styled(Container)`
  position: relative;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IozvImg = styled.div`
  width: 1164px;
  height: 69px;
  background: url(/assets/images/iozv.png) no-repeat;
  background-size: 100% 100%;
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
    font-weight: 600;
    font-size: 75.5541px;
    line-height: 66px;
    text-align: center;
    letter-spacing: 12px;
    color: rgba(159, 172, 247, 0.6);
    text-shadow: 0px 4px 4px rgba(136, 141, 236, 0.5), 0px 4px 4px #888dec, 0px 4px 4px rgba(136, 141, 236, 0.5);
    filter: blur(1.5px);
    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
      color: #b9c3f8;
    }
  }
`

export const PhoneImg = styled.div`
  width: 850px;
  height: 470px;
  margin-top: -90px;
  background: url(/assets/images/phone.png) no-repeat;
  background-size: 100% 100%;
`
