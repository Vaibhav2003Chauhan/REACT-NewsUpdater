import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {

    function fetch_news()
    {
        if(category=== undefined)
        {
            fetch(``)
        }
        else{
            fetch(``)
        }
    }
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout