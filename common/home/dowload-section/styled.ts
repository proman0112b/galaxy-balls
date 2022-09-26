import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const DownloadSectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  section:nth-child(1) {
    margin-right: 36.88px;
    @media screen and (max-width: 1024px) {
      margin-right: 0;
    }
  }

  section:nth-child(3) {
    margin-left: 63.86px;
    @media screen and (max-width: 1024px) {
      margin-left: 0;
    }
  }
`

export const Card = styled.section`
  width: 267px;
  height: 94px;
  padding: 22px 32px 21px 60px;
  background: linear-gradient(131.81deg, #191924 6.53%, #21212f 98.12%);
  box-shadow: inset 0px 1.21014px 3.63043px rgba(0, 0, 0, 0.5), inset -1.21014px -1.21014px 4.84058px #3d3d50,
    inset 1.21014px 1.21014px 8.47101px rgba(0, 0, 0, 0.551155);
  border: 1.21px solid rgb(72, 74, 87);
  border-radius: 32px;
  color: ${theme.color.typography.secondary};
  font-family: ${theme.fontFamily.primary};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 34vw;
    height: 12.23vw;
    padding: 0;
  }

  @media screen and (max-width: 426px) {
    width: 87.6px;
    height: 61px;
    border-radius: 16px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 25.6px;
    span {
      font-size: 18px;
      line-height: 27px;
      opacity: 0.8;

      @media screen and (max-width: 426px) {
        font-size: 11px;
        line-height: 16px;
      }
    }

    @media screen and (max-width: 768px) {
      gap: 3vw;
    }
  }

  p {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.5em;
    opacity: 0.4;
    cursor: pointer;
    @media screen and (max-width: 426px) {
      font-size: 6px;
      line-height: 9px;
    }
  }
`
