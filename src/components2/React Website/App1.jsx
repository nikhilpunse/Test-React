import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import {Route,Routes} from 'react-router-dom';
import Footer from './Footer';
const App1 = () =>{
    return (<>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Header/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>} />
                <Route path='/contact' element={<Contact/>}/>
           </Routes>
           <Footer/>
           
    </>)
}

export default App1;