import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const MainSectionContainer = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 72px;
  line-height: 71px;
  text-align: center;
  background-image: linear-gradient(180deg, #3c5462 0%, #a7a7a7 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 2px 8px rgb(0 99 248 / 80%));
  -webkit-text-stroke: 1px #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 35px;
  }
`

export const Description = styled.p`
  width: 651px;
  margin-top: 32px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #8a8ac4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 150%;
    width: 278px;
  }
`

export const Content = styled.div`
  margin-top: 160px;
  display: flex;
  gap: 24px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    gap: 40px;
  }
`

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 41px;

  span {
    border-radius: 30px;
    cursor: pointer;
  }
`

export const Photos = styled.div`
  display: flex;
  gap: 49px;

  @media screen and (max-width: 768px) {
    gap: 17px;
  }

  span {
    border-radius: 10px;
  }
`

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 12px;
    width: 426px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    color: #8a8ac4;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 150%;
      width: 311px;
    }
  }

  p {
    margin-top: 32px;
    width: 531px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    color: #8a8ac4;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
      width: 336px;
    }
  }

  @media screen and (max-width: 1300px) {
    align-items: center;
    text-align: center;
  }
`

export const ContactInfo = styled.div`
  width: 255px;
  height: 48px;
  background: rgba(255, 215, 73, 0.1);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  color: #ffd749;

  span {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 32px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 239px;
    height: 40px;
  }
`
export const LearnContainer = styled(Container)`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${theme.fontFamily.primary};
    font-weight: 700;
    font-size: 45px;
    line-height: 68px;
    text-align: center;
    color: #8a8ac4;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 36px;
      width: 286px;
    }
  }

  p {
    width: 651px;
    margin-top: 32px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #8a8ac4;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      width: 286px;
    }
  }

  .swiper {
    width: 763px;

    @media screen and (max-width: 1200px) {
      order: 1;
    }

    @media screen and (max-width: 768px) {
      width: 338px;
    }
  }

  .swiper-slide {
    width: 338px;
    height: 216px;
    background: url(/assets/images/transporter/coming-soon.png) no-repeat;
  }
`

export const SwiperWrapper = styled.div`
  margin-top: 74px;
  display: flex;
  gap: 108px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    width: 763px;
    gap: 88px;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 338px;
    gap: 0;
  }
`

export const NavigationPrev = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(138, 138, 196, 0.1);
  border-radius: 12px;
  color: #8a8ac4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    order: 2;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`
export const NavigationNext = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(138, 138, 196, 0.1);
  border-radius: 12px;
  color: #8a8ac4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    order: 3;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: 88px;
  }
`
