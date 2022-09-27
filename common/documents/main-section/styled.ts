import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../../components/container'
import Wrapper from '../../../components/wrapper'

export const MainSectionContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 357px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 426px) {
    margin-top: 60px;
  }
`
export const Title = styled.h1`
  font-family: ${theme.fontFamily.secondary};
  font-weight: 300;
  font-size: 70px;
  line-height: 61px;
  background: linear-gradient(180deg, #fdfdfd 0%, #a7a7a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 2px 12px rgba(250, 250, 250, 0.38);

  @media screen and (max-width: 768px) {
    font-size: 50px;
    line-height: 41px;
  }

  @media screen and (max-width: 426px) {
    font-size: 36px;
    line-height: 31px;
  }
`

export const Switch = styled.div`
  width: 425px;
  height: 70px;
  margin-top: 30px;
  background: #13131c;
  box-shadow: 8px 8px 16px rgba(7, 7, 9, 0.662234), -6px -6px 16px rgba(44, 44, 64, 0.480059);
  border-radius: 61px;
  border: 1px solid #272731;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 315px;
    height: 52px;
  }

  @media screen and (max-width: 426px) {
    margin-top: 41px;
  }
`

interface SwitchItemProps {
  selected: boolean
}

export const SwitchItem = styled.div<SwitchItemProps>`
  height: 60px;
  padding: 13px 28px;
  background: ${({ selected }) => (selected ? 'linear-gradient(135deg, #1f1f30 0%, #161621 100%)' : 'transparent')};
  box-shadow: ${({ selected }) => (selected ? '0px 6px 16px rgba(7, 7, 9, 0.662234)' : 'none')};
  border: ${({ selected }) => (selected ? '1px solid #28203f' : 'none')};
  border-radius: 31px;
  font-family: ${theme.fontFamily.primary};
  font-size: 19.2193px;
  line-height: 34px;
  text-align: center;
  color: #8a8ac4;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 42px;
    font-size: 14px;
    line-height: 34px;
    padding: 8px 20px;
    display: flex;
    align-items: center;
  }
`

export const DescriptionWrapper = styled(Wrapper)`
  width: 100%;
  margin-top: 129px;
  padding-left: 87px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 22px;
  }

  @media screen and (max-width: 426px) {
    margin-top: 76px;
  }
`
export const ImprintDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 129px;
  padding-left: 87px;
  display: flex;
  gap: 33px;

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 22px;
  }

  @media screen and (max-width: 426px) {
    margin-top: 76px;
  }
`

export const ImprintDescription = styled.div`
  margin-top: 100px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  line-height: 34px;
  color: #8a8ac4;
`

export const Description = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 33px;

  p {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    color: #8a8ac4;

    @media screen and (max-width: 1024px) {
      font-size: 35px;
      line-height: 44px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media screen and (max-width: 426px) {
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 22px;
  }
`

interface NumberProps {
  selected?: boolean
}

export const Number = styled.div<NumberProps>`
  width: 61px;
  height: 61px;
  background: linear-gradient(135deg, #1f1f30 0%, #161621 100%);
  border: ${({ selected }) => (selected ? '6px solid #7a49ff' : '1px solid #23233d')};
  box-shadow: ${({ selected }) =>
    selected
      ? '2px 2px 16px rgba(7, 7, 9, 0.662234), -2px -2px 16px rgba(106, 64, 222, 0.43)'
      : '8px 8px 16px rgba(7, 7, 9, 0.662234), -6px -6px 16px rgba(44, 44, 64, 0.480059)'};
  border-radius: 39.5px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: ${({ selected }) => (selected ? '#7A49FF' : '#8A8AC4')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
    line-height: 24px;
    border: ${({ selected }) => (selected ? '2px solid #7a49ff' : '1px solid #23233d')};
  }
`

export const VerticalDivider = styled.div`
  width: 3px;
  height: 550px;
  margin-left: 30px;
  background: #140e24;

  @media screen and (max-width: 1024px) {
    margin-left: 25px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 18px;
  }
`
