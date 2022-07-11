import React ,{useState,useEffect}from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("");

    const {
        temp, 
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

   useEffect(() => {
     if(weathermood){
         switch (weathermood) {
             case 'Clouds': setWeatherState('bi-cloud-sun')
                            break;
             case 'Haze': setWeatherState('bi-cloud-haze2-fill')
                            break;
             case 'Clear': setWeatherState('bi-brightness-high')
                            break;
             case 'Rain': setWeatherState('bi-cloud-rain')
                            break;
             default: setWeatherState('bi-brightness-high')
                 break;
         }
     }
   }, [weathermood])
   
   

    // converting sec to time
    const sec = sunset;
    const date = new Date(sec * 1000);
    const timeStr = `${date.getHours()}:${date.getMinutes()}`
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
                <p>{timeStr} {date.getHours()>12? 'PM' : 'AM'} <br /> Sunset</p>
                </div>
                <div className="humidity">
                  <p>{humidity} <br />Humidity</p>  
                </div>
                <div className="pressure">
                    <p>{pressure} <br /> Pressure </p>
                </div>
                <div className="wind">
                <p>{speed} <br /> Wind </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weathercard;