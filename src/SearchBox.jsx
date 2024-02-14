import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateWeatherInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.REACT_APP_API_KEY;

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result={
                city: city,
                weather :jsonResponse.weather[0].description,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like
        };
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
      };
      
    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            // reset
            setCity("");
            let newInfo=await getWeatherInfo();
            updateWeatherInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }
 return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" 
        label="City Name" 
        variant="standard" 
        value={city} 
        onChange={handleChange}
        name='city'
        required/>
        <br /><br />
        <Button className="back-col" variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>Data does not exist!</p> }
        </form>
    </div>
 );
}

export default SearchBox;