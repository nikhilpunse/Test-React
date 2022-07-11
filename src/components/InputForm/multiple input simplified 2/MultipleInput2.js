import React, {useState} from 'react'
import './style.css'
const MultipleInput2 = () => {
    const [biodata,setBiodata] = useState({
        fName :'',
        lName :'',
        email :'',
        mobNumber :'',
    });

    //input value in objects
    const inputEvent = (event) =>{
        const {name,value}= event.target;
        
         setBiodata((preValue)=>{
            return {...preValue, [name] : value}
        })

        // setBiodata((prevalue)=>{
        //     if(name === 'fName'){
        //         return {...prevalue, fName : value}
        //     }else if(name === 'lName'){
        //         return {...prevalue, lName:value}
        //     }else if(name === 'email'){
        //         return {...prevalue, email:value}
        //     }else if(name === 'mobNumber'){
        //         return {...prevalue,mobNumber:value}
        //     }
        // })
    }

    // submit Function
    const SubmitData = (event)=>{
        event.preventDefault();
        alert('Data Submited successfully');
    }
  return (
    <>
        <div className="container">
            <form onSubmit={SubmitData}>
                <p>Hello {biodata.fName} {biodata.lName} <br />
                {biodata.email} <br /> {biodata.mobNumber}</p>
                <input type="text" value={biodata.fName} placeholder='First Name' name="fName" onChange={inputEvent}/>   <br />
                <input type="text" value={biodata.lName} placeholder='Last Name' name="lName" onChange={inputEvent}/>   <br />
                <input type="email" value={biodata.email} placeholder='Email' name="email" onChange={inputEvent}/>   <br />
                <input type="number" value={biodata.mobNumber} placeholder='Mobile no.' name="mobNumber" onChange={inputEvent}/>   <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    </>
  )
}

export default MultipleInput2