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
  background: url(/assets/images/meteor4.png);
  background-size: 100% 100%;
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
`

export const BGWrapper = styled(Wrapper)`
  height: 41.23vw;
  background: url(/assets/images/footer-bg.png);
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
  }
`

export const Title1 = styled.h2`
  margin-top: 17vw;
  font-family: 'Aquire';
  font-style: normal;
  font-weight: 300;
  font-size: 65px;
  line-height: 57px;
  text-align: center;
  background: linear-gradient(180deg, #f8f8f8 0%, #a7a7a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 3px 8px #ffffff;
`
export const SocialLinks = styled.div`
  margin-top: 112px;
  display: flex;
  gap: 20px;
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
  }
`
