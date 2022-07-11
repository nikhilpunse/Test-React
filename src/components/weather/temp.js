import React, { useState ,useEffect} from 'react';
import './style.css';
import Weathercard from './Weathercard';

const Temp = () => {
    const [weatherSearch,setWeatherSearch] = useState("");
    const [tempInfo,setTempInfo] = useState({});
    const getWeatherInfo = async ()=>{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&units=metric&appid=4db243d5b0dd3264b7c4875848405191`;
            const res = await fetch(url);
            const data = await res.json();
           
            const {temp, humidity, pressure} = data.main;
            const {main : weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country , sunset} = data.sys;

            const newWeatherInfo = {
                temp, 
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            setTempInfo(newWeatherInfo);
             
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        getWeatherInfo();
    }, []);
    
  return (
    <>
        <div className="search-bar">
            <input type="text" placeholder='Search...' value={weatherSearch} onChange={(e)=>setWeatherSearch(e.target.value)}/>
            <span onClick={getWeatherInfo}>Search</span>
        </div>

        <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp;