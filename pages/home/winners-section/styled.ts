import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const WinnersSectionContainer = styled(Container)`
  display: flex;
  margin-top: 160px;
  position: relative;
  justify-content: space-between;
`

export const MeteorImg = styled.div`
  width: 300px;
  height: 221px;
  background: url(/assets/images/meteor3.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`

export const Title = styled.div`
  width: 495px;
  height: 80px;
  background: #222235;
  margin-top: 83px;
  padding: 6px 57px 6px 244px;
  font-family: ${theme.fontFamily.primary};
  font-weight: 700;
  font-size: 45px;
  line-height: 68px;
  text-align: center;
  color: #8a8ac4;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-left: 12px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 180px;
  margin-left: 12px;

  p {
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 32px;
    color: ${theme.color.typography.primary};
    width: 426px;
    margin-top: 72px;
  }
`

export const Tip = styled.div`
  display: flex;
  gap: 25.21px;
  justify-content: center;
  align-items: center;

  span {
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 30px;
    width: 350px;
  }
`

export const ListButton = styled.button`
  width: 287px;
  height: 63.5px;
  background: linear-gradient(133.32deg, #222236 2.76%, #181827 100%);
  border: 1px solid #3f2f6b;
  box-shadow: 3px 3px 13px #0d0d11, -3px -3px 13px rgba(59, 59, 88, 0.732873);
  border-radius: 13px;
  font-family: ${theme.fontFamily.primary};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #7a49ff;
  margin-top: 95px;
  cursor: pointer;
`
export const WinnersList = styled.div`
  width: 784px;
  height: 806px;
  background: url(/assets/images/list.png);
  background-size: 100% 100%;
  margin-top: 120px;
  position: relative;
  z-index: 0;
`
