import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import GotoPlane from './GotoPlane';
import Plane from './Plane';
import Landing_page from './Landing_page';
import Login from './Login';
import Dashboard from './Dashboard';
import Video from './Video';

const App1 = () => {
  const [vidLink, setVidLink] = useState();

  return (
    <>

      <Routes>
        <Route path='/' element={<Landing_page/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/GotoPlane' element={<GotoPlane/>}></Route>
        <Route path='/plane' element={<Plane/>}></Route>
        <Route path='/dashboard' element={<Dashboard setVidLink={setVidLink} />}></Route>
        <Route path='/video' element={<Video vidLink={vidLink} />}></Route>
      </Routes>

        
    </>
  )
}

export default App1;