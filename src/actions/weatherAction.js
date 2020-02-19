import axios from 'axios';

const baseUrl = "http://api.openweathermap.org/data/2.5";
const appId = "&appid=d395b164d35cd41872a8e4338c93c7ef";

export function getWeather(){
    return axios.get(baseUrl+"/weather?q=Quebec"+appId);
}