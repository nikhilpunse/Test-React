import React, { useState } from 'react'
import './style.css'
const DigitalClock = () => {
  const [time,setTime] = useState();
  const [clinterval,setClInterval]=useState();
  const getTime = ()=>{
    const time = new Date().toLocaleTimeString();
    setTime(time);
    setClInterval=setInterval(getTime,1000)
    
  }
  
  

  return (
    <>
        <div className="container">
            <h2 id='show'>Current Time {time} </h2>
            <button onClick={getTime}>Start Timer</button>
        </div>
    </>
  )
}

export default DigitalClock;