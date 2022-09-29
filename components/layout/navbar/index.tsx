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
import { langStaticData } from '../../../static/lang-static-data'

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  const isSmallMenu = useMediaQuery({ query: '(max-width: 1250px)' })
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false)
  const [selectedLang, setSelectedLang] = useState<LangStaticData>(langStaticData[0])
  const { pathname, query, asPath, locale } = useRouter()

  useEffect(() => {
    setSelectedLang(langStaticData.filter(lang => lang.locale === locale ?? lang)[0])
  }, [])

  const LangSection = (
    <LangButton>
      <Image src={selectedLang.src} alt="no logo" width="30px" height="30px" layout="fixed" />
      <label>{selectedLang.label}</label>
      <LangMenu>
        {langStaticData.map((data: LangStaticData, index: number) => (
          <Link href={{ pathname, query }} as={asPath} locale={data.locale} key={index}>
            <div onClick={() => setSelectedLang(langStaticData[index])}>
              <Image src={data.src} alt="no logo" width="30px" height="30px" layout="fixed" />
              <label>{data.label}</label>
            </div>
          </Link>
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
