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
`

export const Description = styled.p`
  margin-top: 45px;
  font-family: ${theme.fontFamily.primary};
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: ${theme.color.typography.primary};
`

export const CardList = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 50px;
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

  div:nth-child(1) {
    height: 70px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    background: ${({ clicked }) => (clicked ? '#7A49FF' : 'transparent')};

    svg {
      color: ${({ clicked }) => (clicked ? '#FFFFFF' : '#71719a')};
      font-size: 15px;
    }

    span {
      color: ${({ clicked }) => (clicked ? '#FFFFFF' : theme.color.typography.primary)};
      font-family: ${theme.fontFamily.primary};
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
    }
    cursor: pointer;
  }

  div:nth-child(2) {
    padding: 30px 25px;
    color: ${theme.color.typography.primary};
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 30px;
    transition: all 2s linear;
    opacity: ${({ clicked }) => (clicked ? 1 : 0)};
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
    transition: ${({ clicked }) => (clicked ? 'opacity 0.7s linear, visibility 0s linear' : 'opacity 0.3s linear, visibility 0s linear 1s')};
  }
`
