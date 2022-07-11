import React, { useState,useEffect } from 'react'

const Weathercard2 = ({tempInfo}) => {
    const {
        temp, pressure, humidity,
        weathermood,speed,country,sunset,name
    } = tempInfo;

    // weathermood icon control
    const [weatherState,setWeatherState] = useState("");
    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case 'Clear': setWeatherState('bi-brightness-high')
                break;
                case 'Cloudy': setWeatherState('bi-cloud-sun')
                break;
                case 'Rain': setWeatherState('bi-cloud-lightning-rain-fill')
                break;
                case 'Haze': setWeatherState('bi-cloud-haze2')
                break;
            
                default: setWeatherState('bi-brightness-high')
                    break;
            }
        }
    }, [weathermood])
    
   


    const sec = sunset;
    const date = new Date(sec * 1000); 
    const timestr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
        <div className="container">
            <div className="image">
                <i className={`bi ${weatherState}`}></i>
            </div>
            <div className="weather-info">
                <div className="left">
                    <div className="cel">
                        {temp} &deg;
                    </div>
                    <div className="location">
                        <h2>{weathermood}</h2>
                        <p>{name},{country}</p>
                    </div>
                </div>
                <div className="right">
                 <p>{new Date().toLocaleString()}</p> 
                </div>
            </div>
            <div className="weather-info2">
                <div className="time">
                <p>{timestr} {date.getHours()>12? 'PM':'AM'}  <br /> Sunset</p>
                </div>
                <div className="humidity">
                  <p>{humidity} <br />Humidity</p>  
                </div>
                <div className="pressure">
                    <p> {pressure} <br /> Pressure </p>
                </div>
                <div className="wind">
                <p>{speed} <br/> Wind </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weathercard2;