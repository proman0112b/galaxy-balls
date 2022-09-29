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
  padding: 6px 57px 6px 204px;
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

  @media screen and (max-width: 768px) {
    margin-left: 0;
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
      font-size: 12px;
      line-height: 19px;
      width: 350px;
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
  background: url(/assets/images/home/list-blur.png);
  background-size: 100% 100%;
  margin-top: 120px;
  position: relative;
  z-index: 0;
  opacity: 0.8;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 76vw;
    height: 78vw;
    margin-top: 50px;
    align-items: center;
  }
`

export const WinnersListButton = styled.div`
  margin-top: 300px;
  width: 303.49px;
  height: 95.74px;
  background: linear-gradient(135deg, #222236 -29.19%, #181820 70.81%);
  border: 1px solid rgba(225, 147, 4, 0.1);
  box-shadow: 18.34859px 18.34859px 26.6972px rgba(7, 7, 9, 0.662234), -16.26144px -16.26144px 26.6972px rgba(44, 44, 64, 0.480059);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  :hover {
    box-shadow: none;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 39.51vw;
    height: 12.46vw;
  }

  @media screen and (max-width: 426px) {
    border-radius: 16px;
    position: absolute;
    margin-top: 56px;
  }

  div {
    width: 276.78px;
    height: 75.02px;
    background: linear-gradient(135deg, #2d2236 0%, #181820 100%);
    border: 1px solid #e19304;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 36.03vw;
      height: 9.76vw;
    }

    @media screen and (max-width: 426px) {
      width: 35.03vw;
      height: 8.76vw;
      border-radius: 10px;
    }

    span {
      font-family: ${theme.fontFamily.primary};
      font-weight: 500;
      font-size: 25px;
      line-height: 38px;
      color: #e19304;

      @media screen and (max-width: 768px) {
        font-size: 3.25vw;
        line-height: 3.71vw;
      }
    }
  }
`

export const WinnerTable = styled.table`
  width: 291px;
  height: 322px;
  z-index: 1;
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

export const Rectangle1 = styled.div`
  width: 68.3vw;
  height: 76vw;
  position: absolute;
  top: 86px;
  background: linear-gradient(135deg, #222236 0%, #181820 100%);
  mix-blend-mode: normal;
  opacity: 0.5;
  border: 0.496059px solid #36333e;
  border-radius: 24.803px;
  transform: rotate(15deg);
  /* @media screen and (max-width: 376px) {
    width: 251px;
    height: 290.93px;
  } */
`

export const Rectangle2 = styled.div`
  width: 68.3vw;
  height: 76vw;
  position: absolute;
  top: 86px;
  background: linear-gradient(135deg, #222236 0%, #181820 100%);
  mix-blend-mode: normal;
  opacity: 0.3;
  border: 0.496059px solid #36333e;
  border-radius: 24.803px;
  transform: rotate(30deg);
`
