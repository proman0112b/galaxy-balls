import styled from 'styled-components'
import Container from '../../../components/container'

export const ValueSectionContainer = styled(Container)`
  margin-top: 137px;
  display: flex;
  justify-content: center;
`

export const CardList = styled.div`
  width: 1117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  div:nth-child(3),
  div:nth-child(4) {
    margin-top: 64px;
  }

  div:nth-child(3) {
    p {
      width: 220px;
    }
  }

  div:nth-child(4) {
    p {
      width: 242px;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 500px;
    div:nth-child(2) {
      margin-top: 64px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: auto;
    flex-direction: column;
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
      margin-top: 100px;
    }

    div:nth-child(1) {
      p {
        width: 320px;
      }
    }

    div:nth-child(2) {
      p {
        width: 254px;
      }
    }

    div:nth-child(3) {
      p {
        width: 350px;
      }
    }

    div:nth-child(3) {
      p {
        width: 242px;
      }
    }
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: 1200px) {
    gap: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 55px;
  }
`

export const Description = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Inter';

  h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.01em;
    color: #d2d2ef;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8a8ac3;
  }

  @media screen and (max-width: 768px) {
    order: 2;
    align-items: center;
    text-align: center;
    width: auto;
  }
`
