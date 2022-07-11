import React, { useState,useEffect } from 'react';
import './style.css';
import Weathercard2 from './weathercard2';

const Temp_2 = () => {
    const [searchLocation,setSearchLocation] = useState("pune");
    const [tempInfo,setTempInfo] = useState({});
    const getWeatherInfo = async() =>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&appid=4db243d5b0dd3264b7c4875848405191`;
        const res = await fetch(url);
        const data = await res.json();
        
        // destructuring of api object
        const {temp, pressure, humidity} = data.main;
        const {main : weathermood} = data.weather[0];
        const {speed} = data.wind;
        const {country,sunset} = data.sys;
        const {name} = data;

        const newTempInfo = {
            temp, pressure, humidity,
            weathermood,speed,country,sunset,name
        };
        setTempInfo(newTempInfo);
    }
    useEffect(() => {
      getWeatherInfo();
    }, [])
    
  return (
    <>
        <div className="search-bar">
            <input type="text" placeholder='Search...' value={searchLocation} onChange={(e)=>setSearchLocation(e.target.value)}/>
            <span onClick={getWeatherInfo}>Search</span>
        </div>

        {/* weathercard */}
        <Weathercard2 tempInfo = {tempInfo}/>
    </>
  )
}

export default Temp_2;