import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'

interface MenuComponentProps {
  setShowSmallMenu: Function
}

const MenuComponent: React.FC<MenuComponentProps> = ({ setShowSmallMenu }) => {
  return (
    <Menu>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>Home</a>
      </Link>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>Start</a>
      </Link>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>Rules</a>
      </Link>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>World Map</a>
      </Link>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>Winner</a>
      </Link>
      <Link href="/spaceballs">
        <a onClick={() => setShowSmallMenu(false)}>SpaceBalls</a>
      </Link>
      <Link href="/partners">
        <a onClick={() => setShowSmallMenu(false)}>Partner</a>
      </Link>
      <Link href="/transporter">
        <a onClick={() => setShowSmallMenu(false)}>Transporter</a>
      </Link>
      <Link href="/documents">
        <a onClick={() => setShowSmallMenu(false)}>Faq</a>
      </Link>
    </Menu>
  )
}

export default MenuComponent
