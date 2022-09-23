import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'

const MenuComponent: React.FC = () => {
  return (
    <Menu>
      <Link href="/">Home</Link>
      <Link href="/documents">Documents</Link>
      <Link href="/">Rules</Link>
      <Link href="/">World Map</Link>
      <Link href="/">Winner</Link>
      <Link href="/spaceballs">SpaceBalls</Link>
      <Link href="/partners">Partner</Link>
      <Link href="/transporter">Transporter</Link>
      <Link href="/">Faq</Link>
    </Menu>
  )
}

export default MenuComponent
