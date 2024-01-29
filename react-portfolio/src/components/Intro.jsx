import React from 'react';
import HeaderLinks from "./headerLinks";
import '../styles/header.css'

const Intro = () => {
  return (
    <div className='intro-box'>
        <h5>Hello, I'm</h5>
        <h1>Alexander Sponholz</h1>
        <h5 className='text-light'>a student who loves making new things, as well as programming and design</h5>
        <HeaderLinks/>
    </div>
  )
}

export default Intro