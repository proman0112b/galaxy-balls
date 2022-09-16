import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const ConditionSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 60px;
    font-family: ${theme.fontFamily.primary};
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: ${theme.color.typography.primary};
    width: 658px;
    text-align: center;
  }

  .Carousel {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-color: ${theme.color.background.primary};

    * {
      border-radius: 24px;
    }

    div:nth-child(1) {
      height: 579px;
    }

    div:nth-child(2) {
      margin-top: 34px;
      width: 100%;
      height: 108px;
      padding: 0 20px;
      flex: 1;
      ul {
        justify-content: center;
        align-items: center;
        gap: 33px;
      }
      li {
        max-width: 100%;
        width: 190px;
      }
    }
  }
`
export const Title = styled.h2`
  font-family: ${theme.fontFamily.primary};
  font-weight: 700;
  font-size: 45px;
  line-height: 68px;
  text-align: center;
  color: #8a8ac4;
`

export const CarouselWrapper = styled.div`
  width: 878px;
  height: 721px;
  margin-top: 112px;
  position: relative;
`

export const RightButton = styled.button`
  position: absolute;
  top: 260px;
  right: -80px;
  width: 68px;
  height: 68px;
  background: rgba(138, 138, 196, 0.1);
  border: none;
  border-radius: 17px;
  text-align: center;
  font-size: 42px;
  font-weight: 900;
  color: #8a8ac4;
  text-shadow: 0px 1px 1px rgba(80, 80, 253, 0.67), 0px -3px 10px rgba(80, 80, 253, 0.54), -2px -3px 5px rgba(109, 109, 255, 0.4), 2px 3px 3px #1f1404,
    inset 0.5px 0.5px 1px #8d8dff;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const LeftButton = styled.button`
  position: absolute;
  top: 260px;
  left: -80px;
  width: 68px;
  height: 68px;
  background: rgba(138, 138, 196, 0.1);
  border: none;
  border-radius: 17px;
  font-size: 42px;
  font-weight: 900;
  color: #8a8ac4;
  text-shadow: 0px 1px 1px rgba(80, 80, 253, 0.67), 0px -3px 10px rgba(80, 80, 253, 0.54), -2px -3px 5px rgba(109, 109, 255, 0.4), 2px 3px 3px #1f1404,
    inset 0.5px 0.5px 1px #8d8dff;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
