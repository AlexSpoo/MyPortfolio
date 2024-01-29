import React from 'react'
import '../styles/nav.css'
import { FaHouse } from "react-icons/fa6";
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <div className='navbar'>
      <nav className='nav-desktop-menu'>
          <Link className='desktop-menu-list-item'>HOME</Link>
          <Link className='desktop-menu-list-item'>ABOUT</Link>
          <Link className='desktop-menu-list-item'>PORTFOLIO</Link>
      </nav>
    </div>
  )
}

export default Nav