import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const DownloadSectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
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

  div {
    display: flex;
    align-items: center;
    gap: 25.6px;
    span {
      font-size: 18px;
      line-height: 27px;
      opacity: 0.8;
    }
  }

  p {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.5em;
    opacity: 0.4;
  }
`
