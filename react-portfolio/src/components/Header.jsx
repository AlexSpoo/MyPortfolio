import React from 'react'
import '../styles/header.css'
import CTA from "./CTA";
import MyPicture from "../assets/me.png"
import HeaderLinks from "./headerLinks";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="container header_box">
        <h5>Hello, I'm</h5>
        <h1>Alexander Sponholz</h1>
        <h5 className='text-light'>a student who loves making new things, as well as programming and design</h5>
        <HeaderLinks/>
        <div className='myPicture'>
          <img src={MyPicture} alt='hello' />
        </div>

        <a href='#contact' className='scroll_icon btn'>
          <FaChevronDown/>
        </a>
        
      </div>
    </header>
  )
}

export default Header