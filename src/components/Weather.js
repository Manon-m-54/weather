import React, { useState, useEffect } from 'react';
import {getWeather} from "../actions/weatherAction"
// import {mockWeather} from '../mocks/mockWeather.js'

function Weather() {

    const[weather, setWeather] = useState(null);
    const [city, setCity] = useState("London");

    useEffect(() =>{
        loadWeatherData();
    }, [city])
    
    async function loadWeatherData(){
        const weatherAjax = await getWeather(city);
        setWeather(weatherAjax.data);
    }

    function kelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
    }

    function mpsToKmh(mthToKmh){
        return Math.round(mthToKmh * 3.6);
    }

    function loadInconWeather(idIcon){
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }

    function changeCity(city){
        setCity(city);
    }
    return (
        <div>
            {
                weather ?
                <div>
                    <h1>Météo : {weather.name}</h1>
                    <img src={loadInconWeather(weather.weather[0].icon)} alt="Not Found"/>
                    <p>{weather.weather[0].description}</p>
                    <input type="text" name="ville" placeholder="Enter your town" onChange = {(event) => {changeCity(event.target.value)}}/>
                    <p>{kelvinToCelsius(weather.main.temp)} °C</p>
                    <p>Humidité : {weather.main.humidity} %</p>
                    <p>Vitesse du vent : {mpsToKmh(weather.wind.speed)} km/h</p>
                    <p>Température ressentie : {kelvinToCelsius(weather.main.feels_like)} °C</p>
                    <p>{weather.coord.lon}</p>
                    <p>{weather.coord.lat}</p>
                </div>

                : <h1>Météo en attente de chargement</h1>
            }
            
        </div>
    )
}

export default Weather;
