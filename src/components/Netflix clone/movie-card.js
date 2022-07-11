import React from 'react'

const Movie_card = ({Data}) => {
  return (
    <>
    <div className="wrapper">
    {Data.map((curElem,index)=>{
        return(
          
          <div className="container" key ={index}>
            <img src={`${curElem.imgsrc}`}/>
            <h3>{curElem.title}</h3>
            <h2>{curElem.movie_name}</h2>
            <button>WATCH NOW</button>
         </div>
        )
      })}
    </div>
    </>
  )
}

export default Movie_card;