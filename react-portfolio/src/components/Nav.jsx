import React from 'react'
import '../styles/nav.css'
import { FaHouse } from "react-icons/fa6";
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <div className='navbar'>
      <nav className='navDesktopMenu'>
          <Link className='desktopMenuListItem'>HOME</Link>
          <Link className='desktopMenuListItem'>ABOUT</Link>
          <Link className='desktopMenuListItem'>PORTFOLIO</Link>
      </nav>
    </div>
  )
}

export default Nav