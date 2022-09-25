import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'

export const MoreSectionContainer = styled(Container)`
  margin-top: 237px;
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
      width: 250px;
      font-size: 28px;
      line-height: 42px;
    }
  }

  p {
    margin-top: 32px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #8a8ac4;
    @media screen and (max-width: 768px) {
      width: 342px;
      font-size: 14px;
      line-height: 150%;
    }
  }

  .swiper {
    width: 896px;

    @media screen and (max-width: 1200px) {
      order: 1;
    }

    @media screen and (max-width: 1024px) {
      width: 586px;
    }

    @media screen and (max-width: 768px) {
      width: 338px;
    }
  }

  .swiper-slide {
    width: 276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    span {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      color: #ffffff;
    }

    @media screen and (max-width: 768px) {
      gap: 30px;
    }
  }
`

export const ComingSoonImg = styled.div`
  width: 276px;
  height: 226px;
  background: url(/assets/images/spaceballs/coming-soon.png) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 768px) {
    width: 338px;
    height: 216px;
    background: url(/assets/images/spaceballs/coming-soon-sm.png) no-repeat;
  }
`
export const SwiperWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 35px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    width: 896px;
    gap: 88px;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    width: 586px;
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
