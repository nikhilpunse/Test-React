import React,{useState} from 'react';
import './style.css';

const MultipleInput = () =>{
    const [fullName,setFullName] = useState({
        fName : '',
        lName : '', 
    });

    const OnChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue)=>{
            if(name === 'fName'){
                return{
                    fName : value,
                    lName : preValue.lName}
            }else if(name === 'lName'){
                return {
                    fName : preValue.fName,
                    lName : value
                }
            }
        })
    }
    const SubmitFunction = (event) =>{
        event.preventDefault();
        alert('form submited')
    }
    return (<>
        <div className="container">
        
        <form onSubmit={SubmitFunction}>
            <p>Hello {fullName.fName} {fullName.lName} </p>
            <input type="text" name='fName' 
            value={fullName.fName}
             onChange={OnChange}/>

            <input type="text" name='lName' 
            value={fullName.lName}
             onChange={OnChange}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    </>)
}
export default MultipleInput;