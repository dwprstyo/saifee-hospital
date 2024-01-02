import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from '../Components/Layout/Top'
import Header from '../Components/Layout/Header'
import Navbar from '../Components/Layout/Navbar'

const AppLayout = () => {
  return (
    <>
        <Top />
        <Header />
        <Navbar />
        <Outlet/>
        <div>Footer</div>
    </>
  )
}

export default AppLayout