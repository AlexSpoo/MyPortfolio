import React from 'react';
import '../styles/header.css';
import Portrait from './Portrait';
import { FaChevronDown } from "react-icons/fa6";
import Intro from "./Intro";

const Header = () => {
  return (
    <header>
      <div className="container header-box">
        <Intro />
      </div>
      
    </header>
  )
}

export default Header