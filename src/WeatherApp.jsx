import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Jeju Island",
        feelsLike: 13.67,
        humidity: 87,
        temp: 13.95,
        tempMax: 14.05,
        tempMin: 13.95,
        weather: "mist",
    });

    let updateWeatherInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather Forecast</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}