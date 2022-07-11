import React, { useState } from 'react'
import './style.css'
const InputForm = () => {
    const [inputDataOne,setInputDataOne] = useState();
    const [inputDataTwo,setInputDataTwo] = useState();
    const [inputReceiveOne,setInputReceiveOne] = useState();
    const [inputReceiveTwo,setInputReceiveTwo] = useState();


    const InputInfoOne = (event)=>{
        setInputDataOne(event.target.value);
    }

    const InputInfoTwo = (event)=>{
        setInputDataTwo(event.target.value);
    }

    const SwapData = (event) =>{
        event.preventDefault();
        setInputReceiveOne(inputDataOne);
        setInputReceiveTwo(inputDataTwo);
    }
    const Clear = ()=>{
        setInputDataOne('')
        setInputDataTwo('')
        setInputReceiveOne('')
        setInputReceiveTwo('')
    }

  return (
    <>
        <div className="container">
            <h1>React input form with form tag + prevent default behaviour of clearing input feild</h1>
            <h2>Type name and click button</h2>
            <h2>my first name is {inputReceiveOne} and last name is {inputReceiveTwo}</h2>
            <form onSubmit={SwapData}>
                <input type="text" placeholder='Enter first name' value={inputDataOne} onChange={InputInfoOne}/> <br />
                <input type="text" placeholder='Enter Last name' value={inputDataTwo} onChange={InputInfoTwo}/>
                <button type='submit'>Submit</button>
                <button onClick={Clear}>Clear</button>
            </form>
        </div>
    </>
  )
}

export default InputForm;