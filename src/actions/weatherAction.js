import axios from 'axios';

export function getWeather(){
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=Quebec&appid=d395b164d35cd41872a8e4338c93c7ef");
}