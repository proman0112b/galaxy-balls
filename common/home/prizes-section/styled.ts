import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'
import Wrapper from '../../../components/wrapper'

export const PrizesSectionContainer = styled(Container)`
  margin-top: 94px;
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
  max-width: 973px;
  margin-top: 45px;
  font-family: ${theme.fontFamily.primary};
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: ${theme.color.typography.primary};
`

export const BGWrapper = styled(Wrapper)`
  width: 100%;
  height: 812px;
  background: url(/assets/images/prizes-bg.png);
  background-size: 100% 100%;
`
