import styled from 'styled-components'
import Container from '../../../components/container'

export const AdventureSectionContainer = styled(Container)`
  margin-top: 128px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1399px) {
    margin-top: 209px;
  }

  @media screen and (max-width: 426px) {
    overflow-x: clip;
  }
`

export const Card = styled.div`
  position: relative;
  width: 1218px;
  height: 838px;
  padding-left: 58px;
  background: linear-gradient(216.81deg, #2a2a41 0%, #1b1b29 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 24px 16px -16px rgba(0, 0, 0, 0.05);
  border-radius: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1399px) {
    width: 90vw;
    height: auto;
    align-items: center;
    padding-left: 0;
  }

  @media screen and (max-width: 426px) {
    align-items: flex-start;
    padding-left: 16px;
    width: 337px;
  }

  h2 {
    width: 541px;
    margin-top: 14px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #fcfcfd;

    @media screen and (max-width: 1399px) {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 40px;
      width: 316px;
    }

    @media screen and (max-width: 426px) {
      text-align: left;
    }
  }

  p {
    width: 323px;
    margin-top: 36px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8a8ac3;

    @media screen and (max-width: 1399px) {
      text-align: center;
      margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
      width: 303px;
    }

    @media screen and (max-width: 426px) {
      text-align: left;
    }
  }
`

export const Badge = styled.div`
  width: 120px;
  height: 48px;
  margin-top: 80px;
  padding: 8px 12px;
  background: rgba(255, 215, 73, 0.1);
  border-radius: 12px;
  color: #ffd749;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 110px;
    font-size: 14px;
  }

  @media screen and (max-width: 426px) {
    margin-top: 530px;
  }
`

export const BGImg = styled.div`
  position: absolute;
  top: -111px;
  right: -70px;
  width: 969px;
  height: 1011px;
  background: url(/assets/images/spaceballs/adventure-bg.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1399px) {
    position: static;
    width: 69.21vw;
    height: 72.21vw;
    margin-top: -111px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -70px;
  }

  @media screen and (max-width: 426px) {
    background: url(/assets/images/spaceballs/adventure-bg-sm.png) no-repeat;
    top: 0;
    left: 0;
    width: 425px;
    height: 570px;
    position: absolute;
  }
`
