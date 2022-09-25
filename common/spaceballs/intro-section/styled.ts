import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const IntroSectionContainer = styled(Container)`
  padding-left: 149px;
  margin-top: -128px;
  display: flex;
  gap: 31px;
  align-items: center;

  @media screen and (max-width: 1300px) {
    margin-top: 0;
    padding-left: 0;
    gap: 0;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 62px;
  }
`

export const BGImg = styled.div`
  width: 738px;
  height: 691px;
  background: url(/assets/images/spaceballs/intro-bg.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1300px) {
    width: 520px;
    height: 480px;
  }

  @media screen and (max-width: 1024px) {
    order: 1;
  }

  @media screen and (max-width: 768px) {
    width: 425px;
    height: 381px;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
    height: 89.64vw;
  }
`

export const MeteorImg = styled.div`
  margin-left: -87px;
  width: 144px;
  height: 113px;
  background: url(/assets/images/spaceballs/meteor1.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const TitleContainer = styled(Container)`
  max-width: 485px;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: ${theme.fontFamily.secondary};
    font-weight: 700;
    font-size: 72px;
    line-height: 71px;
    text-align: center;
    background: linear-gradient(180deg, #fdfdfd 0%, #a7a7a7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0px 2px 12px #fafafa;

    @media screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 35px;
    }
  }

  p {
    margin-top: 24px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #8a8ac4;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 150%;
      width: 335px;
    }
  }

  @media screen and (max-width: 1024px) {
    order: 2;
    text-align: center;
    align-items: center;
  }
`

export const PlayButton = styled.button`
  margin-top: 48px;
  width: 177px;
  height: 64px;
  background: linear-gradient(99.99deg, #7a49ff 7.49%, #5414ff 67.39%);
  border: 1px solid #3f2f6b;
  box-shadow: 3px 3px 9px rgba(8, 8, 10, 0.66), -2px -2px 9px rgba(65, 65, 92, 0.26);
  border-radius: 12px;

  span {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #f3f0fb;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 50px;
  }
`
