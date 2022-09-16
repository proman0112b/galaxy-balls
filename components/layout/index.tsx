import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Navbar from './navbar'
import Footer from './footer'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <PerfectScrollbar style={{ height: '100vh' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </PerfectScrollbar>
    </>
  )
}

export default Layout
