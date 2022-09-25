import styled from 'styled-components'
import Container from '../../../components/container'

export const ChanceSectionContainer = styled(Container)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  width: 1100px;
  padding: 24px 96px;
  background: linear-gradient(216.81deg, #2a2a41 0%, #1b1b29 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 24px 16px -16px rgba(0, 0, 0, 0.05);
  border-radius: 48px;

  h2 {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.01em;
    color: #d2d2ef;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 40px;
      width: 227px;
    }
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #8a8ac3;
  }

  @media screen and (max-width: 1200px) {
    width: 95vw;
  }

  @media screen and (max-width: 768px) {
    width: 337px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CardBody = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-top: 13.78px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40.88px;
    flex-direction: column;
    align-items: center;
    gap: 51px;
  }
`

export const DoubleArrow = styled.div`
  margin-top: 50px;
  height: 26px;
  display: flex;
  align-items: center;

  svg {
    color: #7b7ba8;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(90deg);
  }
`

export const Number = styled.span`
  width: 36px;
  height: 36px;
  padding: 8px;
  margin-top: 18.11px;
  background: radial-gradient(76.39% 76.39% at 18.12% 21.81%, #8282ce 0%, #17172d 100%);
  border-radius: 41.3308px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #c6c6e5;
`
