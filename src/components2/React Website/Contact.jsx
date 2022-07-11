import React, { useState } from 'react'

const Contact = () => {
  const [inputData,setInputData] = useState(
    {
      fName:'',
      phone:'',
      email:'',
      msg : '',
    }
  );
  const inputEvent = (event) =>{
    const {name,value} = event.target;
    setInputData(
      {...inputData,[name]:value,}
    );
  }

const submitData = (event)=>{
  event.preventDefault();
  alert(`Your Name is ${inputData.fName}. your phone naumber is ${inputData.phone}.
  your email is ${inputData.email}.your msg is ${inputData.msg}`)

}

  return (
    <section className="my-12">
        <p className="text-center text-2xl mb-2 ">Contact Us</p>
        <form onSubmit={submitData} className="px-5 w-full md:w-[80%] mx-auto flex flex-col justify-start items-center ">
            <div className="my-2 w-[70%]">
                <label  >FullName : </label><br/>
                 <input  name='fName' value={inputData.fName} onChange={inputEvent} className=" border-2 w-[100%] py-1 " type="text"/> 
            </div>
            <div className="my-2 w-[70%]">
                <label  >Phone : </label> <br/>
                 <input name='phone' value={inputData.phone} onChange={inputEvent} className="border-2 w-[100%] py-1 " type="number"/>
            </div>
             <div className="my-2 w-[70%]">
                <label  >Email :</label> <br/>
                 <input name='email' value={inputData.email} onChange={inputEvent} className="border-2 w-[100%] py-1 " type="email"/> 
             </div>
             <div className="my-2 w-[70%]">
                <label className="" >Message </label> <br/>
                <textarea name='msg' value={inputData.msg} onChange={inputEvent} className="border-2 w-[100%] h-36" ></textarea> 
             </div>
            <input className="py-2 px-4 border rounded-lg bg-slate-500 text-white" type="submit"/>
        </form>
    </section>
  )
}

export default Contact