import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const WinnersSectionContainer = styled(Container)`
  display: flex;
  margin-top: 160px;
  position: relative;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    section {
      width: 100%;
    }
  }

  @media screen and (max-width: 426px) {
    margin-top: 80px;
  }
`

export const MeteorImg = styled.div`
  width: 300px;
  height: 221px;
  background: url(/assets/images/home/meteor3.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 29vw;
    height: 21.3vw;
  }

  @media screen and (max-width: 426px) {
    width: 120px;
    height: 80.65px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 48px;
    width: 300px;
    height: 60px;
    padding: 6px 15px;
    margin-left: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: 0;
  }

  @media screen and (max-width: 426px) {
    font-size: 20px;
    line-height: 30px;
    width: 150px;
    height: 70px;
    padding: 20.5px 41px 18.63px 30px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 180px;
  margin-left: 12px;

  @media screen and (max-width: 1300px) {
    padding: 0;
  }

  p {
    font-family: ${theme.fontFamily.primary};
    font-size: 18px;
    line-height: 32px;
    color: ${theme.color.typography.primary};
    width: 426px;
    margin-top: 72px;

    @media screen and (max-width: 1300px) {
      width: 80vw;
      text-align: center;
    }

    @media screen and (max-width: 426px) {
      font-size: 13px;
      line-height: 19px;
      width: 360px;
      margin-top: 25.73px;
    }
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

    @media screen and (max-width: 426px) {
      font-size: 12px;
      line-height: 20px;
      width: 250px;
    }
  }

  @media screen and (max-width: 426px) {
    gap: 20.35px;
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

  @media screen and (max-width: 426px) {
    width: 200px;
    height: 45px;
    margin-top: 70px;
    font-size: 13px;
    line-height: 16px;
  }
`
export const WinnersList = styled.div`
  width: 784px;
  height: 806px;
  background: url(/assets/images/home/list.png);
  background-size: 100% 100%;
  margin-top: 120px;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 1024px) {
    width: 76vw;
    height: 78vw;
    margin-top: 50px;
  }
`

export const WinnerTable = styled.table`
  width: 291px;
  height: 322px;
  background: linear-gradient(135deg, #222236 0%, #181820 100%);
  border: 0.510767px solid #36333e;
  border-radius: 25.5384px;
  padding: 32px 18px 31px 22px;
  margin-top: 56px;
  font-family: ${theme.fontFamily.primary};
  font-size: 9.19381px;
  line-height: 11px;
  color: #5f5785;

  th,
  td {
    text-align: center;
    padding: 10px;
  }

  td:nth-child(3) {
    display: flex;
    gap: 5.85px;
    justify-content: center;
    div {
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background: linear-gradient(145.62deg, #202030 13.55%, #1b1b26 84.8%);
      box-shadow: 1.59035px 1.59035px 5.83128px -0.530116px #0e0e11, -1.06023px -1.59035px 5.83128px -0.530116px #2d2d40;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: #b9b4d4;
      }
    }
  }
`
