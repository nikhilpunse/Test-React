import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import './CovidData.css'
const CovidData = () => {
    const [dataArr,setDataArr] = useState([]);
    
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const data = await res.json();
        setDataArr(data.statewise);
        console.log(data.statewise)
    }
    
    useEffect(() => {
      getCovidData();
    }, [])
    

  return (
    <>
        <div className="wrapper">
        <h2 className='text-4xl mt-9 mb-6'> <span className='text-4xl font-bold'>India</span> Covid-19 Statewise <span className='bg bg-green-700 text-white rounded-md pr-1'> Live </span> Data</h2>
        <table className='border-collapse border'>
            <thead>
            <tr className='p-2 text-xl '>
                <th className='w-52 p-1 bg-black text-white'>STATE</th>
                <th className='w-52 p-1 bg-black text-white'>CONFIRMED</th>
                <th className='w-52 p-1 bg-black text-white'>RECOVERED</th>
                <th className='w-52 p-1 bg-black text-white'>DEATH</th>
                <th className='w-52 p-1 bg-black text-white'>ACTIVE</th>
                <th className='w-52 p-1 bg-black text-white'>UPDATED</th>
            </tr>
            </thead>
            <tbody>
            {dataArr.map((curElem,index)=>{
                return (
                    <tr key={index}>
                <td className='text-center p-1 font-medium'>{curElem.state}</td>
                <td className='text-center p-1 font-medium'>{curElem.confirmed}</td>
                <td className='text-center p-1 font-medium'>{curElem.recovered}</td>
                <td className='text-center p-1 font-medium'>{curElem.deaths}</td>
                <td className='text-center p-1 font-medium'>{curElem.active}</td>
                <td className='text-center p-1 font-medium'>{curElem.lastupdatedtime}</td>
              </tr>
                )
            })}
              
            </tbody>
            
        </table>
        </div>
        
    </>
  )
}

export default CovidData