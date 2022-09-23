import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const FeaturesSectionContainer = styled(Container)`
  margin-top: 79.67px;
`

export const Feature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BallImg1 = styled.div`
  width: 560px;
  height: 593px;
  background: url(/assets/images/spaceballs/ball1.png);
  background-size: 100% 100%;
`
export const BallImg2 = styled.div`
  width: 560px;
  height: 560px;
  background: url(/assets/images/spaceballs/ball2.png);
  background-size: 100% 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    width: 496px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #fcfcfd;
  }

  p {
    width: 352px;
    margin-top: 24px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8a8ac3;
  }
`

export const CardList = styled.div`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

interface CardProps {
  selected: boolean
}

export const Card = styled.div<CardProps>`
  width: 352px;
  padding: 24px;
  background: ${({ selected }) =>
    selected ? 'radial-gradient(95.08% 339.39% at 2.27% 4.92%, rgba(191, 191, 191, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #7A49FF' : '#1f1f30'};
  border-radius: 16px;
  display: flex;
  gap: 33px;
  color: ${({ selected }) => (selected ? '#DADBDB' : '#8a8aab')};

  span {
    font-family: ${theme.fontFamily.primary};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    max-width: 248px;
  }
`
