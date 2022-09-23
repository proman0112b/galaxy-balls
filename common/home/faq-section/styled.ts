import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const FaqSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-family: ${theme.fontFamily.primary};
  font-weight: 700;
  font-size: 45px;
  line-height: 68px;
  text-align: center;
  color: #8a8ac4;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 50px;
  }

  @media screen and (max-width: 426px) {
    font-size: 25px;
    line-height: 38px;
  }
`

export const Description = styled.p`
  margin-top: 45px;
  font-family: ${theme.fontFamily.primary};
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: ${theme.color.typography.primary};

  @media screen and (max-width: 768px) {
    margin-top: 28.84px;
    font-size: 15px;
  }

  @media screen and (max-width: 426px) {
    font-size: 13px;
    line-height: 19px;
    width: 335px;
  }
`

export const CardListWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  gap: 80px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 28.84px;
  }

  @media screen and (max-width: 426px) {
    gap: 30px;
  }
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 426px) {
    gap: 30px;
  }
`

interface CardProps {
  clicked: boolean
}

export const Card = styled.div<CardProps>`
  width: 530px;
  height: ${({ clicked }) => (clicked ? 'auto' : '70px')};
  background: #1f1f30;
  border: 1px solid ${({ clicked }) => (clicked ? '#534282' : '#1f1f30')};
  border-radius: 18px;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 426px) {
    width: 335px;
    height: ${({ clicked }) => (clicked ? 'auto' : '42.95px')};
  }

  div:nth-child(1) {
    height: 70px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    background: ${({ clicked }) => (clicked ? '#7A49FF' : 'transparent')};

    @media screen and (max-width: 768px) {
      padding: 0 15px;
    }

    @media screen and (max-width: 426px) {
      height: 42.95px;
      gap: 10px;
    }

    svg {
      color: ${({ clicked }) => (clicked ? '#FFFFFF' : '#71719a')};
      font-size: 15px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }

    span {
      color: ${({ clicked }) => (clicked ? '#FFFFFF' : theme.color.typography.primary)};
      font-family: ${theme.fontFamily.primary};
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      @media screen and (max-width: 768px) {
        font-size: 15px;
        line-height: 20px;
      }

      @media screen and (max-width: 426px) {
        font-size: 11.0455px;
        line-height: 17px;
      }
    }
    cursor: pointer;
  }

  div:nth-child(2) {
    padding: 30px 25px;
    color: ${theme.color.typography.primary};
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 30px;
    opacity: ${({ clicked }) => (clicked ? 1 : 0)};
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
    transition: ${({ clicked }) => (clicked ? 'opacity 0.7s linear, visibility 0s linear' : 'opacity 0.3s linear, visibility 0s linear 0.3s')};

    @media screen and (max-width: 768px) {
      font-size: 15px;
      line-height: 20px;
      padding: 25px 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
      line-height: 20px;
      padding: 25px 20px;
    }

    @media screen and (max-width: 426px) {
      font-size: 11.0455px;
      line-height: 18px;
      padding: 18.41px 15.34px;
    }
  }
`
