import React from 'react';
import Card from './Card';
import ApiData from './ApiData';
const Service = () => {
  return (
    <>  
        <div className=" w-[90vw] mx-auto flex flex-wrap">
            {ApiData.map((val,index)=>{
            return <Card imgsrc={val.imgsrc} key={index} title={val.title}/>
        })}
        </div>
        
       
    </>
  )
}

export default Service