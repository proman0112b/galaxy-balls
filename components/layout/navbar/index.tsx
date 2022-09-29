import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { IoMdClose } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'
import Wrapper from '../../wrapper'
import { NavbarContainer, Logo, DownloadButton, LangButton, SmallMenu, NavMenu, LangMenu } from './styled'
import Menu from './menu'
import type { LangStaticData } from '../../../types/navbar'
import { langStaticData, languages } from '../../../static/lang-static-data'

interface LinkComponentProps {
  children: any
  locale: any
  href?: any
}

export const LinkComponent: React.FC<LinkComponentProps> = ({ children, locale, ...props }) => {
  const router = useRouter()
  const { pathname, query, asPath } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || 'en'
  let href = props.href || pathname

  if (locale) {
    if (props.href) {
      href = `/${locale}${href}`
    } else {
      if (pathname.startsWith('/404')) {
        href = `/${locale}`
      } else {
        href = pathname.replace('[lang]', locale)
      }
    }
  } else {
    if (language) {
      href = `/${language}${href}`
    } else {
      href = `/${href}`
    }
  }

  // Fix double slashes
  href = href.replace(/([^:]\/)\/+/g, '$1').replace('//', '/')

  return (
    <Link href={href} passHref>
      {children}
    </Link>
  )
}

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  const isSmallMenu = useMediaQuery({ query: '(max-width: 1250px)' })
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false)
  const [selectedLang, setSelectedLang] = useState<LangStaticData>(langStaticData[0])
  const { pathname, query, asPath } = useRouter()

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || 'en'

  useEffect(() => {
    setSelectedLang(langStaticData.filter(lang => lang.locale === language ?? lang)[0])
  }, [language])

  if (!language) return null

  const LangSection = (
    <LangButton>
      <Image src={selectedLang.src} alt="no logo" width="30px" height="30px" layout="fixed" />
      <label>{selectedLang.label}</label>
      <LangMenu>
        {langStaticData.map((data: LangStaticData, index: number) => (
          <LinkComponent locale={data.locale} key={index}>
            <div onClick={() => setSelectedLang(langStaticData[index])}>
              <Image src={data.src} alt="no logo" width="30px" height="30px" layout="fixed" />
              <label>{data.label}</label>
            </div>
          </LinkComponent>
        ))}
      </LangMenu>
    </LangButton>
  )

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
            {LangSection}
            <NavMenu onClick={() => setShowSmallMenu(true)}>
              <HiMenu />
            </NavMenu>
          </div>
        ) : (
          LangSection
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
