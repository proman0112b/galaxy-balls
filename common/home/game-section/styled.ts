import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const Title = styled.h2`
  font-family: ${theme.fontFamily.primary};
  font-size: 45px;
  line-height: 68px;
  text-align: center;
  color: #8a8ac4;
  margin: 57.8px 0 21px 0;

  @media screen and (max-width: 426px) {
    font-size: 25px;
    line-height: 38px;
  }
`

export const GameSectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 71px;

  div:nth-child(1) {
    height: 352.79px;
  }

  div:nth-child(2) {
    height: 579.52px;
    margin-top: 66px;
  }

  div:nth-child(3) {
    height: 356.55px;
  }

  @media screen and (max-width: 1200px) {
    gap: 20px;
  }

  @media screen and (max-width: 1024px) {
    gap: 20px;
    max-width: 700px;
    flex-wrap: wrap;

    div:nth-child(1) {
      order: 1;
    }

    div:nth-child(2) {
      order: 3;
      margin: 0;
    }

    div:nth-child(3) {
      order: 2;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 335px;
    gap: 30px;
    flex-direction: column;

    div:nth-child(1) {
      order: 1;
    }

    div:nth-child(2) {
      order: 2;
    }

    div:nth-child(3) {
      order: 3;
    }
  }

  @media screen and (max-width: 426px) {
    max-width: 335px;
    gap: 30px;
    flex-direction: column;

    div:nth-child(1) {
      order: 1;
      height: 342px;
    }

    div:nth-child(2) {
      order: 2;
      height: 423px;
    }

    div:nth-child(3) {
      order: 3;
      height: 330px;
    }
  }
`

export const Card = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(54.46% 54.46% at 110.76% 108.16%, rgba(25, 25, 36, 0.256355) 0%, rgba(0, 0, 0, 0.0001) 100%),
    radial-gradient(58.9% 58.9% at 5.73% 4.1%, rgba(255, 255, 255, 0.0397864) 0%, rgba(0, 0, 0, 0.0001) 100%),
    linear-gradient(135deg, #303043 0%, #161621 100%);
  box-shadow: 8.47101px 8.47101px 24.2029px #0c0c15, -6.05072px -6.05072px 32.6739px rgba(46, 46, 64, 0.673282);
  border-radius: 59.8209px;

  label {
    margin-top: 15.3px;
    font-family: ${theme.fontFamily.primary};
    font-weight: 700;
    font-size: 21.9343px;
    line-height: 26px;
  }

  p {
    padding: 0 35px;
    margin-top: 34.2px;
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 32px;
    color: ${theme.color.typography.primary};
    text-align: center;

    @media screen and (max-width: 426px) {
      padding: 0 20px;
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 426px) {
    border-radius: 30px;
  }
`
