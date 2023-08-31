import { type ReactNode } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = (): ReactNode => {
  return (
    <div className='mt-20'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
