import styled from 'styled-components'
import theme from '../../../styles/theme'
import Container from '../../container'

export const NavbarContainer = styled(Container)`
  height: 100%;
  padding: 40.5px 38px 38.5px 43.8px;
  display: flex;
  background: transparent;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5.8px;
  font-family: ${theme.fontFamily.secondary};
  font-weight: 300;
  font-size: 17.9966px;
  line-height: 16px;
  letter-spacing: 2.68242px;
  background: linear-gradient(180deg, #fdfdfd 0%, #a7a7a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 0.599887px 3.59932px rgba(250, 250, 250, 0.86);
  z-index: 1;
`

export const Menu = styled.div`
  width: 791px;
  height: 49px;
  padding: 0px 32px;
  margin-left: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #1f1f30 0%, #161621 100%);
  border: 1px solid #23233d;
  box-shadow: 7px 8px 16px rgba(7, 7, 9, 0.37), -6px -6px 16px rgba(44, 44, 64, 0.32);
  border-radius: 12px;
  z-index: 1;

  a {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #777da8;
  }
`

export const DownloadButton = styled.button`
  width: 144px;
  height: 48.38px;
  margin-left: 44.5px;
  background: linear-gradient(133.32deg, #222236 2.76%, #181827 100%);
  border: 1px solid #3f2f6b;
  box-shadow: 3px 3px 9px rgba(8, 8, 10, 0.66), -2px -2px 9px rgba(65, 65, 92, 0.26);
  border-radius: 12px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #7a49ff;
  cursor: pointer;
  z-index: 1;
`
export const LangButton = styled.button`
  width: 56px;
  height: 48px;
  margin-left: 24px;
  background: linear-gradient(133.32deg, #222236 2.76%, #181827 100%);
  border: 1px solid rgba(63, 47, 107, 0.34);
  box-shadow: 3px 3px 9px rgba(8, 8, 10, 0.66), -2px -2px 9px rgba(65, 65, 92, 0.26);
  border-radius: 12px;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-family: ${theme.fontFamily.primary};
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    background: linear-gradient(135deg, #8487da 4.41%, #251d3a 104.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  z-index: 1;
`
