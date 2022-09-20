import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'

const MenuComponent: React.FC = () => {
  return (
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
  )
}

export default MenuComponent
