import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './style.css';
const Links = () => {
  return (
    <>  <div className="flex justify-evenly text-2xl align-middle bg-black text-white">
            <NavLink activeclassname='active' className='no' to='/'>About Us</NavLink>
            <NavLink activeclassname='active' className='no' to='/contact'>Contact Us</NavLink>
            <NavLink activeclassname='active' className='no' to='/user'>User</NavLink>
            <NavLink activeclassname='active' className='no' to='/service' >Service</NavLink>
        </div>
        
    </>
  )
}

export default Links