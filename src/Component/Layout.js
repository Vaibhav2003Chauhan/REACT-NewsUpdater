import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Fotter'
import Home from './Home'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Home />
            <Footer />
        </>
    )
}

export default Layout