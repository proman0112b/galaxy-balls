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
  width: 50px;
  height: 50px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
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

export const SearchBox = styled.div`
  background: #0a0a0b;
  border-radius: 16px;
  padding: 10px 10px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 59px;

  input {
    background: #0a0a0b;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #4a474e;
    flex: 1;
    margin-left: 8px;
  }

  input:hover,
  input:focus {
    outline: none;
  }
`

interface CountryWidgetProps {
  selected: boolean
}
export const CountryWidget = styled.div<CountryWidgetProps>`
  background: linear-gradient(135deg, #222236 0%, #181820 100%);
  border: 1.4px solid #36333e;
  border-radius: 16px;
  width: 350px;
  height: 80px;
  padding: 5px 14px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  ${({ selected }) => (selected ? 'box-shadow: 0px 7px 20px #000;' : '')}

  img {
    width: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }

  div :first-child {
    color: #4a474e;
    font-weight: 400;
    font-size: 11px;
    line-height: 17px;
  }

  div :last-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #97909d;
  }
`

export const WinnersHead = styled.div`
  padding: 10px 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }

  div:nth-child(1) :first-child {
    color: #7e7885;
    font-weight: 700;
    font-size: 18px;
    line-height: 17px;
    margin-bottom: 5px;
  }

  div:nth-child(1) :last-child {
    font-weight: 700;
    font-size: 26px;
    line-height: 20px;
    color: #616ae1;
  }

  div:nth-child(2) {
    border: 3px solid #443178;
    color: #5d42a8;
    width: 100px;
    height: 50px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background: transparent;
    display: flex;
    box-shadow: 0px 0px 25px 6px rgb(12 12 12 / 81%);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  div:nth-child(2) svg {
    cursor: pointer;
  }
`
