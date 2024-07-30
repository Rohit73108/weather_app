import React, { useState } from 'react'
import axios from 'axios';

function Weather() {
    let [city , setCity]=useState();
    let [weather , setWeather]=useState();
    let handleCityChange=(e)=>{
        setCity(e.target.value);
    }
    let fetchWeather= async()=>{
        try {
            const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'1c89d68e0c447c963d38fcde07c9cf95'}`)
            console.log(res);
            setWeather(res);
        } catch (error) {
            console.error(error);
        }
    }
    let handleClick=()=>{
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='enter your city name' value={city} onChange={handleCityChange}></input>
        <br/>
        <button onClick={handleClick}>Get Weather</button>
        {
            weather && <>
                <div className='weather-info'>
                    <h1>{weather.data.name}</h1>
                    <p>Temp is  {Math.floor(weather.data.main.temp -273.15)}&deg;C</p>
                    <p>{weather.data.weather[0].description}</p>
                </div>
            </>
        }
    </div>
  )
}

export default Weather