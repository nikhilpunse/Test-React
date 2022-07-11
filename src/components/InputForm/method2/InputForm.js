import React, { useState } from 'react'
import './style.css'
const InputForm = () => {
    const [inputData,setInputData] = useState();
    const [inputReceive,setInputReceive] = useState();

    const InputInfo = (event)=>{
        setInputData(event.target.value);
    }

    const SwapData = () =>{
        setInputReceive(inputData);
    }
    const Clear = ()=>{
        setInputData('')
        setInputReceive('')
    }

  return (
    <>
        <div className="container">
            <h1>React input form</h1>
            <h2>Type name and click button</h2>
            <h2>{inputReceive}</h2>
            <input type="text" value={inputData} onChange={InputInfo}/>
            <button onClick={SwapData}>click me</button>
            <button onClick={Clear}>Clear</button>
        </div>
    </>
  )
}

export default InputForm;