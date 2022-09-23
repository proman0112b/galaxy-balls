import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(30, 30, 30, 0.3);
  z-index: 500;
`

export const StyledModal = styled.div`
  z-index: 100;
  background: ${theme.color.background.primary};
  padding: 30px;
  position: relative;
  margin: auto;
  border-radius: 30px;
  box-shadow: 0px 17px 44px rgba(0, 0, 0, 0.9);
  color: ${theme.color.typography.primary};
`

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`

export const HeaderText = styled.div`
  color: #7c35cd;
  align-self: center;
  font-weight: 700;
  font-size: 36px;
`

export const CloseButton = styled.button`
  border: 3px solid #443178;
  color: #5d42a8;
  width: 62px;
  height: 62px;
  -webkit-border-radius: 31px;
  -moz-border-radius: 31px;
  border-radius: 31px;
  background: transparent;
  display: flex;
  box-shadow: 0px 0px 25px 6px rgb(12 12 12 / 81%);
  font-size: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`

export const Content = styled.div`
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  span {
    color: #8a8ac4;
    font-weight: 700;
  }
`
