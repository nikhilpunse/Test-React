import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
    const [menuToggle,setMenuToggle] = useState(false);

    return(
        <>  
            <div className="relative p-2 w-[92vw] mx-auto sm:p-4 flex justify-between items-center"> <h2 className='text-xl sm:text-2xl '>TechDeveloper</h2>
                <ul className='hidden sm:visible sm:flex '>
                    <li aciveclassname='active' className='sm:px-2 md:px-5 sm:text-base md:text-xl'> <NavLink to="/"> Home </NavLink></li>
                    <li aciveclassname='active' className='sm:px-2 md:px-5 sm:text-base md:text-xl'> <NavLink to="/service"> Services </NavLink></li>
                    <li aciveclassname='active' className='sm:px-2 md:px-5 sm:text-base md:text-xl'> <NavLink to="/about"> About </NavLink></li>
                    <li aciveclassname='active' className='sm:px-2 md:px-5 sm:text-base md:text-xl'> <NavLink to="/contact"> Contact </NavLink></li>
                </ul>
                
                {menuToggle ? 
                <>
                <div onClick={()=>setMenuToggle(false)} className="absolute top-2 right-4 z-20 sm:hidden">
                <i className="bi bi-x-lg"></i>
                </div> 
                <ul className='z-10 rounded w-[40%] absolute top-2 right-3 bg-slate-400 sm:hidden '>
                    <li className='px-5 py-3 text-base text-white'> <NavLink to="/"> Home </NavLink></li>
                    <li className='px-5 py-3 text-base text-white'> <NavLink to="/about"> About </NavLink></li>
                    <li className='px-5 py-3 text-base text-white'> <NavLink to="/service"> Services </NavLink></li>
                    <li className='px-5 py-3 text-base text-white'> <NavLink to="/contact"> Contact </NavLink></li>
                </ul> 
                </>
                : <div onClick={()=>setMenuToggle(true)} className="absolute top-2 right-4 z-20 sm:hidden">
                <i className="bi bi-list text-2xl"></i>
                </div> 
                }

                
                
            </div>
        </>
    )
}
export default Navbar;