import React, { useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { IoMdClose } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'
import Wrapper from '../../wrapper'
import { NavbarContainer, Logo, DownloadButton, LangButton, SmallMenu, NavMenu } from './styled'
import Menu from './menu'

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  const isSmallMenu = useMediaQuery({ query: '(max-width: 1250px)' })
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false)

  return (
    <Wrapper>
      <NavbarContainer>
        <Logo>
          <span>Galaxy</span>
          <Image
            src="/assets/icons/logo-sm.png"
            alt="no logo"
            width={isMobile ? '28px' : '42px'}
            height={isMobile ? '28px' : '42px'}
            layout="fixed"
          />
          <span>Balls</span>
        </Logo>
        {!isSmallMenu && <Menu setShowSmallMenu={setShowSmallMenu} />}
        {!isSmallMenu && <DownloadButton type="button">Download</DownloadButton>}
        {isSmallMenu ? (
          <div style={{ display: 'flex' }}>
            <LangButton>
              <Image src="/assets/icons/flag-us.png" alt="no logo" width="15px" height="11.83px" layout="fixed" />
              <span>En</span>
            </LangButton>
            <NavMenu onClick={() => setShowSmallMenu(true)}>
              <HiMenu />
            </NavMenu>
          </div>
        ) : (
          <LangButton>
            <Image src="/assets/icons/flag-us.png" alt="no logo" width="15px" height="11.83px" layout="fixed" />
            <span>En</span>
          </LangButton>
        )}
        {isSmallMenu && showSmallMenu && (
          <SmallMenu>
            <section>
              <Image src="/assets/icons/logo-md.png" alt="no logo" width="51px" height="49px" layout="fixed" />
              <IoMdClose onClick={() => setShowSmallMenu(false)} />
            </section>
            <section>
              <Menu setShowSmallMenu={setShowSmallMenu} />
              <DownloadButton type="button">Download</DownloadButton>
            </section>
          </SmallMenu>
        )}
      </NavbarContainer>
    </Wrapper>
  )
}

export default Navbar
