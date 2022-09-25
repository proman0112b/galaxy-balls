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
  font-size: 44px;
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

export const AnimatedMapWrapper = styled.div`
  background: #191924;
  border: 1px solid #29293b;
  box-shadow: 0 0 50px 3px #000 inset;
  overflow: hidden;
  border-radius: 24px;
  height: 400px;
  position: relative;

  img {
    width: 860px;
  }
`

export const LocationList = styled.ol`
  display: inline-flex;
  list-style-type: none;
  border-top: 3px solid black;
  gap: 7em;
  margin-left: -40px;
  --circle-radius: 32px;

  li {
    width: 5em;
    color: #999;
    cursor: pointer;
    padding: calc(5px + var(--circle-radius)) 0 0;
    margin: 0;
    position: relative;
    text-align: center;
  }

  li::after {
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 0.1);
    background: black;
    box-shadow: 0 0 10px 6px rgba(255, 255, 255, 0.2);
    position: absolute;
    height: calc(2 * var(--circle-radius));
    width: calc(2 * var(--circle-radius));
    top: 0;
    padding-top: 8px;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    content: '?';
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 2em;
  }

  li:first-child::before {
    background-color: ${theme.color.background.primary};
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: -2px;
    left: calc(-50% - var(--circle-radius));
  }

  li:last-child::before {
    background-color: ${theme.color.background.primary};
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: -2px;
    left: calc(50% + var(--circle-radius));
  }
`

interface MarkerWrapperProps {
  color: string
  tooltip: number
}

export const MarkerWrapper = styled.div<MarkerWrapperProps>`
  div {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: url('/assets/images/logo_ball.png') 7px / 70% no-repeat ${({ color }) => color};
    cursor: pointer;
  }

  div::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid ${({ color }) => color};
    margin-top: 43px;
    margin-left: 9px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 140px;
    height: 57px;
    position: absolute;
    border: 2px solid ${({ color }) => color};
    padding-left: 40px;
    border-left: none;
    border-radius: 12px;
    background: #191924;
    left: 16px;
    box-shadow: 8px 4px 6px 4px rgb(12 12 12 / 46%);
    transition: opacity 0.2s linear;
    opacity: ${({ tooltip }) => tooltip};
    font-size: 11px;
    color: hsl(291deg 80% 45%);
  }

  i {
    font-size: 6px;
    font-style: normal;
    color: #8a8ac4;
  }
`
