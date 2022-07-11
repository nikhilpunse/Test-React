import React, { useState,useEffect } from 'react';
import './style.css'
const UseEffect = () => {
    let [number, setNumber] = useState(0);
    
    useEffect(() => {
      document.title = `chars(${number})`
    },[])
    

  return (
    <>
        <div class="container">
            <h2 id="show">{number}</h2>
            <div class="btn">
                <p id="incr" class="btns" onClick={()=>setNumber(number+1)}>INCR</p>
                {/* <p id="decr" class="btns" onClick={()=> number>0? setNumber(number-1) :setNumber(0) }>DECR</p> */}
            </div>
        </div>
    </>
  )
}

export default UseEffect;