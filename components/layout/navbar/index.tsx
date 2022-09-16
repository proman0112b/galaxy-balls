import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../../wrapper'
import { NavbarContainer, Logo, Menu, DownloadButton, LangButton } from './styled'

const Navbar: React.FC = () => {
  return (
    <Wrapper height={130}>
      <NavbarContainer>
        <Logo>
          <span>Galaxy</span>
          <Image src={'/assets/icons/logo-sm.png'} alt="no logo" width="42px" height="45px" layout="fixed" />
          <span>Balls</span>
        </Logo>
        <Menu>
          <Link href="/">Home</Link>
          <Link href="/">Start</Link>
          <Link href="/">Rules</Link>
          <Link href="/">World Map</Link>
          <Link href="/">Winner</Link>
          <Link href="/">SpaceBalls</Link>
          <Link href="/">Partner</Link>
          <Link href="/">Transporter</Link>
          <Link href="/">Faq</Link>
        </Menu>
        <DownloadButton type="button">Download</DownloadButton>
        <LangButton>
          <Image src={'/assets/icons/flag-us.png'} alt="no logo" width="15px" height="11.83px" layout="fixed" />
          <span>En</span>
        </LangButton>
      </NavbarContainer>
    </Wrapper>
  )
}

export default Navbar
