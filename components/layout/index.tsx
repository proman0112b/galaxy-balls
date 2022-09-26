import React from 'react'
import { useRouter } from 'next/router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useMediaQuery } from 'react-responsive'
import Navbar from './navbar'
import Footer from './footer'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      {isTablet ? (
        <>
          <Navbar />
          <main>{children}</main>
          {router.pathname !== '/documents' && <Footer />}
        </>
      ) : (
        <PerfectScrollbar style={{ height: '100vh' }}>
          <Navbar />
          <main>{children}</main>
          {router.pathname !== '/documents' && <Footer />}
        </PerfectScrollbar>
      )}
    </>
  )
}

export default Layout
