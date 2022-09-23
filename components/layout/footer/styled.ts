import styled from 'styled-components'
import Container from '../../container'
import Wrapper from '../../wrapper'

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const MeteorImg = styled.div`
  position: absolute;
  top: 55px;
  right: 47px;
  width: 346px;
  height: 195px;
  background: url(/assets/images/home/meteor4.png);
  background-size: 100% 100%;

  @media screen and (max-width: 1024px) {
    width: 30vw;
    height: 18vw;
    right: 0;
    top: 5.37vw;
  }

  @media screen and (max-width: 768px) {
    top: 100px;
  }

  @media screen and (max-width: 426px) {
    display: none;
  }
`

export const Title = styled.div`
  width: 500px;
  height: 80px;
  background: #222235;
  padding: 6px 57px 6px 0;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  text-align: right;
  color: #8a8ac4;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  margin: 147px 0 54.85px 12px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 48px;
    width: 300px;
    height: 60px;
    padding: 6px 25px;
    margin-left: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: 110.74px;
  }

  @media screen and (max-width: 426px) {
    width: 216px;
    height: 53px;
    padding: 12px 33.9px 11px 21.19px;
    font-size: 20px;
    line-height: 30px;
  }
`

export const BGWrapper = styled(Wrapper)`
  height: 41.23vw;
  background: url(/assets/images/home/footer-bg.png);
  background-size: 100% 100%;
  border-top-right-radius: 50% 20%;
  border-top-left-radius: 50% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #7796db;
    mix-blend-mode: normal;
    opacity: 0.68;
    margin-top: 11px;

    @media screen and (max-width: 1024px) {
      font-size: 10px;
      line-height: 13px;
    }

    @media screen and (max-width: 426px) {
      margin-top: 8px;
    }
  }

  @media screen and (max-width: 426px) {
    height: 226px;
  }
`

export const Title1 = styled.h2`
  margin-top: 17vw;
  font-family: 'Aquire';
  font-style: normal;
  font-weight: 300;
  font-size: 4.64vw;
  line-height: 4.07vw;
  text-align: center;
  background: linear-gradient(180deg, #f8f8f8 0%, #a7a7a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 3px 8px #ffffff;

  @media screen and (max-width: 426px) {
    font-size: 25px;
    line-height: 22px;
    margin-top: 100px;
  }
`
export const SocialLinks = styled.div`
  margin-top: 8vw;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    margin-top: 72px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 426px) {
    margin-top: 30px;
  }
`

export const References = styled.div`
  margin-top: 21px;
  display: flex;
  gap: 31px;

  span {
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #7c91d2;
    @media screen and (max-width: 1024px) {
      font-size: 10px;
      line-height: 13px;
    }
  }

  @media screen and (max-width: 426px) {
    margin-top: 8px;
  }
`
