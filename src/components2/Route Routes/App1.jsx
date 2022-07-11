import React from 'react';
import {Routes, Route, useLocation}  from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import User from './User';
import Error from './Error';
import Service from './Service';
import Links from './Links';
const App = () => {
  const location = useLocation();
  
  const Name =()=>{
    return(<><h1 className='text-6xl font-semibold ml-10 mt-5'>name component</h1></>)
  }

  return (
    <>
      {/* <div className="div1">
        <h3>Welcome to Current URL :- {location.pathname}</h3>
        {location.pathname === '/service' ?<button> click me</button>:null} 
      </div> */}
        <Links/>
        <Routes>
          <Route  path='/' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/contact/name' element={<Name/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/Service' element={<Service/>} />
          <Route path='*' element={ <Error/> } />
          
      </Routes>
    </>
  )
}

export default App;