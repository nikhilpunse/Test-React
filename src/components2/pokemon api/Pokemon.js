import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [num,setNum] = useState(3);
    const [data,setData] = useState();
    const [name,setName] =useState('');
    const [moves,setMoves] = useState('');
    const getData =async () =>{
        const res = await fetch(`https://pokeapi.co/api/v2/type/${num}`);
        const info =await res.json();
        console.log(info)
        setData(info);
        setName(data.name);
        setMoves(data.moves);
      
    }
    
    useEffect(()=>{
        getData();
    },[num])

  return (
    <>
      <div className="container">
            <div className="mt-9 ml-9 text-xl">You selected  pokemon no. {num}</div>
            <div className="mt-3 text-xl ml-9">My Name is {name} </div>
            <div className="mt-3 text-xl ml-9">I have moves </div>
            <select onChange={(event)=>setNum(event.target.value)}
             className='mt-12 text-xl ml-9 font-medium'>
                <option className='text-xl' value="3">3</option>
                <option className='text-xl' value="25">25</option>
                <option className='text-xl' value="3">3</option>
                <option className='text-xl' value="4">4</option>
                <option className='text-xl' value="5">5</option>
            </select>
        </div>
    </>
  )
}

export default Pokemon