import React,{useState} from 'react';

const User = () => {
    const [inputData,setInputData] = useState();
    const inputEvent = (event) =>{
        setInputData(event.target.value);
        console.log(inputData);
    }
  return (
    <div className='flex justify-center mt-8'>
        <input className='text-center border-2 p-1 text-2xl rounded' type="text" value={inputData} 
        placeholder='Enter Any Word' onChange={inputEvent}/>
        <img src="" alt="" />
    </div>
  )
}

export default User;