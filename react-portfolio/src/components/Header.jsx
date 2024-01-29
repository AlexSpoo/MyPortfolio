import React from 'react'
import '../styles/header.css'
import MyPicture from "../assets/me.png"
import { FaChevronDown } from "react-icons/fa6";
import Intro from "./Intro";

const Header = () => {
  return (
    <header>
      <div className="container header-box">
        <Intro />
        <div className='my-picture'>
          <img src={MyPicture} alt='hello' />
        </div>
        <a href='#contact' className='scroll-icon btn'>
          <FaChevronDown/>
        </a>
      </div>
      
    </header>
  )
}

export default Header