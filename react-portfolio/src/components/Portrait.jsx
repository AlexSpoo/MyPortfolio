import React from 'react';
import '../styles/header.css';
import MyPicture from "../assets/me.png"

const Portrait = () => {
  return (
    <div class='my-picture'>
        <img src={MyPicture} alt='hello' />
    </div>
  )
}

export default Portrait