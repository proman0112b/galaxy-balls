import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const RuleSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
`

export const MeteorImg1 = styled.div`
  width: 245px;
  height: 220px;
  background: url(/assets/images/meteor1.png);
  background-size: 100% 100%;
  position: absolute;
  right: 33px;
  top: -30px;
`

export const MeteorImg2 = styled.div`
  width: 158px;
  height: 144px;
  background: url(/assets/images/meteor2.png);
  background-size: 100% 100%;
  position: absolute;
  left: 32px;
  top: 100px;
`

export const Title = styled.h2`
  font-family: ${theme.fontFamily.primary};
  font-size: 45px;
  line-height: 68px;
  text-align: center;
  color: #8a8ac4;
  margin-top: 149.17px;
`
export const Description = styled.p`
  font-family: ${theme.fontFamily.primary};
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: ${theme.color.typography.primary};
  max-width: 962px;
`
export const CardList = styled.div`
  display: flex;
  gap: 51px;
`

export const CardWrapper = styled.div`
  width: 443px;
  height: 89.13px;
  mix-blend-mode: normal;
  background: #da62ff11;
  border-radius: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  width: 431.54px;
  height: 70px;
  background: #da62ff33;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17.34px;

  p {
    font-family: 'Arial Rounded MT Bold';
    font-size: 16px;
    line-height: 19px;
    color: ${theme.color.typography.secondary};
    max-width: 338px;
  }
`
