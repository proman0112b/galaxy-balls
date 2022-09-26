import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const FinalSectionContainer = styled(Container)`
  margin-top: 128px;
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  position: relative;
  width: 1217px;
  height: 731px;
  background: linear-gradient(216.81deg, #2a2a41 0%, #1b1b29 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 24px 16px -16px rgba(0, 0, 0, 0.05);
  border-radius: 48px;

  @media screen and (max-width: 1300px) {
    width: 90vw;
  }

  @media screen and (max-width: 1200px) {
    height: 1270px;
  }

  @media screen and (max-width: 768px) {
    height: 1120px;
  }

  @media screen and (max-width: 426px) {
    width: 344px;
    height: 1135px;
  }

  h2 {
    margin-top: 14px;
    width: 423px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #fcfcfd;
    @media screen and (max-width: 1200px) {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 56px;
      width: 314px;
    }

    @media screen and (max-width: 426px) {
      text-align: left;
    }
  }

  h3 {
    margin-top: 30px;
    margin-left: 25px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 30px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #fcfcfd;

    @media screen and (max-width: 1200px) {
      text-align: center;
      margin-left: 0;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 56px;
    }

    @media screen and (max-width: 426px) {
      text-align: left;
      margin-left: 15px;
      margin-top: 40px;
    }
  }

  h4 {
    width: 100%;
    font-family: ${theme.fontFamily.primary};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #e6e8ec;

    @media screen and (max-width: 1200px) {
      font-size: 16px;
      line-height: 32px;
    }

    @media screen and (max-width: 426px) {
      width: 260px;
      text-align: center;
    }
  }

  p {
    width: 427px;
    margin-top: 24px;
    font-family: 'Inter';
    font-size: 16px;
    line-height: 24px;
    color: #8a8ac3;

    @media screen and (max-width: 1200px) {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      width: 314px;
      font-size: 14px;
      line-height: 24px;
    }

    @media screen and (max-width: 426px) {
      text-align: left;
    }
  }

  section:nth-child(1) {
    margin-top: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 54px;

    @media screen and (max-width: 426px) {
      margin-top: 40px;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      gap: 0;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        order: 2;
      }
    }
  }

  section:nth-child(3) {
    margin-top: 36px;
    display: flex;
    justify-content: center;
    gap: 32px;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 426px) {
      margin-top: 9px;
    }

    div {
      width: 320px;
      height: 192px;
      padding: 20px;
      background: radial-gradient(96.25% 96.25% at 0% 3.75%, rgba(58, 58, 155, 0.49) 0%, rgba(0, 0, 0, 0) 100%), rgba(51, 51, 68, 0.06);
      border: 1px solid #3e3e62;
      border-radius: 32px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 1200px) {
        height: 124px;
      }
    }
  }
`

export const Badge = styled.span`
  width: 180px;
  height: 48px;
  background: rgba(255, 215, 73, 0.1);
  border-radius: 12px;
  padding: 8px 12px;
  color: #ffd749;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 426px) {
    align-self: flex-start;
    margin-top: 37px;
  }
`
