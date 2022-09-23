import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const ConditionSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    margin-top: 113px;
  }

  p {
    margin-top: 60px;
    font-family: ${theme.fontFamily.primary};
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: ${theme.color.typography.primary};
    width: 658px;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin-top: 40px;
      width: 95vw;
    }

    @media screen and (max-width: 426px) {
      font-size: 14px;
      line-height: 20px;
      width: 335px;
    }
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

      @media screen and (max-width: 1024px) {
        height: 479px;
      }

      @media screen and (max-width: 768px) {
        height: 62.36vw;
      }

      @media screen and (max-width: 426px) {
        height: 220px;
      }
    }

    div:nth-child(2) {
      @media screen and (max-width: 1024px) {
        display: none;
      }
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

  @media screen and (max-width: 768px) {
    width: 95vw;
  }

  @media screen and (max-width: 426px) {
    font-size: 25px;
    line-height: 38px;
    width: 326px;
  }
`

export const CarouselWrapper = styled.div`
  width: 878px;
  height: 721px;
  margin-top: 112px;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 91.14vw;
    margin-top: 50px;
  }

  @media screen and (max-width: 426px) {
    width: 335px;
  }
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
  text-shadow: 2px -3px 3px rgba(80, 80, 253, 0.67);
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 30px;
    right: -50px;
  }

  @media screen and (max-width: 1024px) {
    position: static;
    width: 55px;
    height: 55px;
    font-size: 35px;
  }
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
  text-shadow: -2px -3px 3px rgba(80, 80, 253, 0.67);
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 30px;
    left: -50px;
  }

  @media screen and (max-width: 1024px) {
    position: static;
    width: 55px;
    height: 55px;
    font-size: 35px;
  }
`
