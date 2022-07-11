import React from 'react'
import img from './images/about.png'
import Common from './Common'
import './style.scss'
const Header = () => {
  return (
    <>
        <Common imgsrc={img} 
        name='Grow your Business with'
          btn='Get Started'
        />
    </>
  )
}

export default Header