import axios from 'axios';

const API_KEY = '568ac6e60f4c5357b247c4182b9a04ce';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

