import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

interface MenuComponentProps {
  setShowSmallMenu: Function
}

const MenuComponent: React.FC<MenuComponentProps> = ({ setShowSmallMenu }) => {
  const { locale } = useRouter()
  return (
    <Menu>
      <Link href="/">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'home')}</a>
      </Link>
      <Link href="/#start">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'start')}</a>
      </Link>
      <Link href="/#rules">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'rules')}</a>
      </Link>
      <Link href="/#worldmap">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'world-map')}</a>
      </Link>
      <Link href="/#winner">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'winner')}</a>
      </Link>
      <Link href="/spaceballs">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'space-balls')}</a>
      </Link>
      <Link href="/partners">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'partner')}</a>
      </Link>
      <Link href="/transporter">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'transporter')}</a>
      </Link>
      <Link href="/documents">
        <a onClick={() => setShowSmallMenu(false)}>{trans(locale, 'menu', 'faq')}</a>
      </Link>
    </Menu>
  )
}

export default MenuComponent
