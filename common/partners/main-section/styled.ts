import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const MainSectionContainer = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-family: ${theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 72px;
  line-height: 71px;
  text-align: center;
  background: linear-gradient(180deg, #4303f8 0%, #a7a7a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 2px 12px #fafafa;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 35px;
  }
`

export const Description = styled.p`
  width: 670px;
  margin-top: 36px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8ac4;

  @media screen and (max-width: 1200px) {
    margin-bottom: 94px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 32px;
    font-size: 14px;
    line-height: 150%;
    width: 335px;
    text-align: center;
  }
`
export const CardList = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1200px) {
    width: 540px;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  width: 258px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter';

  h4 {
    margin-top: 16px;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
  }

  span {
    margin-top: 4px;
    font-size: 14px;
    line-height: 28px;
    color: #6c6ca6;
  }

  p {
    margin-top: 16px;
    font-size: 12px;
    line-height: 18px;
    color: #8a8ac4;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const OfficialSiteWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`

export const OfficialSite = styled.div`
  width: 81px;
  height: 32px;
  padding: 8px;
  background: rgba(230, 230, 230, 0.1);
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #e6e6e6;
`

export const Instagram = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  background: rgba(252, 194, 82, 0.1);
  border-radius: 12px;
  color: #fcc252;
`
