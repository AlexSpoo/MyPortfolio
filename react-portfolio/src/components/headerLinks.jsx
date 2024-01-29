import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGitlab } from "react-icons/fa6";

const headerLinks = () => {
  return (
    <div className='header-links-box'>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='link_icon'><IoLogoLinkedin/></a>
        <a href='https://github.com' target='_blank' rel='noreferrer' className='link_icon'><FaGithub/></a>
        <a href='https://gitlab.com' target='_blank' rel='noreferrer' className='link_icon'><FaGitlab/></a>
    </div>
  )
}

export default headerLinks