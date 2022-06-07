/* eslint-disable @next/next/no-img-element */

import React from 'react'
import SideMenu from './SideMenu'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-left'>
            <img className='nav-image' src={'/assests/Logo.png'} alt="logo"/>
        </div>
        <div className='nav-right md:hidden'>
            <img className='nav-burger' src={'/assests/R_side.png'} alt="R_side"/>
        </div>
      <SideMenu/>
    </nav>
  )
}

export default Navbar