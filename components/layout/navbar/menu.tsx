import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'
import { LinkComponent } from './index'
import { languages } from '../../../static/lang-static-data'

interface MenuComponentProps {
  setShowSmallMenu: Function
}

const MenuComponent: React.FC<MenuComponentProps> = ({ setShowSmallMenu }) => {
  const { pathname, query, asPath } = useRouter()
  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || 'en'

  return (
    <Menu>
      <LinkComponent href="/" locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'home')}</a>
      </LinkComponent>
      <LinkComponent href="/#start" locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'start')}</a>
      </LinkComponent>
      <LinkComponent href="/#rules" locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'rules')}</a>
      </LinkComponent>
      <LinkComponent href="/#worldmap" locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'world-map')}</a>
      </LinkComponent>
      <LinkComponent href="/#winner" locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'winner')}</a>
      </LinkComponent>
      <LinkComponent href={`/spaceballs`} locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'space-balls')}</a>
      </LinkComponent>
      <LinkComponent href={`/partners`} locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'partner')}</a>
      </LinkComponent>
      <LinkComponent href={`/transporter`} locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'transporter')}</a>
      </LinkComponent>
      <LinkComponent href={`/documents`} locale={language}>
        <a onClick={() => setShowSmallMenu(false)}>{trans(language, 'menu', 'faq')}</a>
      </LinkComponent>
    </Menu>
  )
}

export default MenuComponent
