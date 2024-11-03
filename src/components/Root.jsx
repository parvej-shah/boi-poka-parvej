import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Root() {
  return (
    <div className=''>
      <div className='min-h-screen'>
      <NavBar/>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
