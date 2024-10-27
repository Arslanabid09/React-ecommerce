import React from 'react'
import { Footer, Navbar, SearchSection } from '../Component'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main >
    <Navbar/>
    <SearchSection/>
    <Outlet/>
    <Footer/>
    </main>
  )
}

export default Layout