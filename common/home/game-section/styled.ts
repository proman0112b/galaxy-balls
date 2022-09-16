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
`

export const GameSectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 71px;
`

interface CardProps {
  height: number
}

export const Card = styled.div<CardProps>`
  display: flex;
  width: 335px;
  height: ${props => `${props.height}px`};
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
  }
`
