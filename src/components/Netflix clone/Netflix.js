import React from 'react'
import './style.css';
import Movie_card from './movie-card';
import Data from './Netflix_api';

const Netflix = () => {
  return (
    <>
    <div className="heading"> Netflix top movies in 2022 </div>
    <Movie_card Data ={Data}/>
    </>
  )
}

export default Netflix;