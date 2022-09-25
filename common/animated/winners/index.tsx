/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { FaFacebookF, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { ModalProps } from '../../../hooks/useModal'
import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop, SearchBox, CountryWidget, WinnersHead } from './styled'
import { WinnerTable } from '../../home/winners-section/styled'
import type { WinnerlistStaticData } from '../../../types/winnerlist-static-data'
import { winnerlistStaticData } from '../../../static/winnerlist-static-data'
import { animated, useSpring, useTrail, useTransition } from 'react-spring'

const WinnersTable: React.FC = () => {
  return (
    <WinnerTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Finder name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {winnerlistStaticData.map((data: WinnerlistStaticData, index: number) => (
          <tr key={index}>
            <td style={{ color: `${data.color}` }}>{data.id}</td>
            <td style={{ color: `${data.color}` }}>{data.name}</td>
            <td>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <AiFillInstagram />
              </div>
              <div>
                <AiOutlineTwitter />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </WinnerTable>
  )
}

const WinnersModal: React.FC<ModalProps> = ({ isShown, hide }) => {
  const searchBox = useTransition(isShown, {
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateX(-30px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
  })
  const winnerHead = useTransition(isShown, {
    config: { duration: 500 },
    delay: 700,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  const [tableAnim, setTableAnim] = useState<number>(-1)
  const winnerTable = useTransition(tableAnim, {
    config: { duration: 500 },
    delay: tableAnim == -1 ? 1400 : 0,
    from: { opacity: 0, transform: 'translateX(30px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
  })
  useEffect(() => {
    setTableAnim(isShown ? -1 : 0)
  }, [isShown])

  const countries: Array<string> = ['RU', 'BR', 'US', 'CN']
  const trail = useTrail(countries.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
    delay: 2100,
    opacity: isShown ? 1 : 0,
    y: isShown ? 0 : 20,
    height: isShown ? 110 : 0,
    from: { opacity: 0, y: 20, height: 0 },
  })

  const [windowSize, setWindowSize] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      function handleResize() {
        setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
    }
  }, [])

  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper>
        <StyledModal style={{ display: isShown ? 'block' : 'none', transform: `scale(${windowSize > 950 ? 1 : windowSize / 950})` }}>
          <Header>
            <HeaderText>List of winners around the world</HeaderText>
            <CloseButton onClick={hide}>&#10006;</CloseButton>
          </Header>
          <Content>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <div style={{ marginRight: '20px' }}>
                {searchBox(style => (
                  <animated.div style={style}>
                    <SearchBox>
                      <FaSearch />
                      <input type="text" placeholder="Search Country..." />
                    </SearchBox>
                  </animated.div>
                ))}

                {trail.map(({ height, ...style }, key) => (
                  <animated.div key={key} style={style}>
                    <CountryWidget selected={key == 1}>
                      <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countries[key]}.svg`} />
                      <div style={{ flex: '1' }}>
                        <span>Country</span>
                        <span>{countries[key]}</span>
                      </div>
                      <div>
                        <span>Winners</span>
                        <span>31</span>
                      </div>
                    </CountryWidget>
                  </animated.div>
                ))}
              </div>

              <div>
                <WinnersHead>
                  {winnerHead(style => (
                    <animated.div style={style}>
                      <span>Winners of</span>
                      <span>France(44)</span>
                    </animated.div>
                  ))}
                  <div>
                    <FaChevronLeft onClick={() => setTableAnim(Date.now())} />
                    <FaChevronRight onClick={() => setTableAnim(Date.now())} />
                  </div>
                </WinnersHead>

                {winnerTable(style => (
                  <animated.div style={style}>
                    <WinnersTable />
                  </animated.div>
                ))}
              </div>
            </div>
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default WinnersModal
