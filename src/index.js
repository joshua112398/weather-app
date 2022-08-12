import './styles/reset.css';
import './styles/style.css';
import { reloadUI } from './ui';

async function fetchWeatherData(city) {
  let value;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85db5f12d307416a29142d60485efdaf&units=imperial`);
    const data = await response.json();
    if (data.cod === '404') {
      throw new Error('Invalid city');
    }
    value = data;
  } catch (err) {
    console.log(err);
    value = {};
  }
  return value;
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function processData(data) {
  const processedData = {};
  processedData.feelsLike = data.main.feels_like;
  processedData.humidity = data.main.humidity;
  processedData.temp = data.main.temp;
  processedData.weather = data.weather[0].main;
  processedData.windSpeed = data.wind.speed;
  processedData.city = data.name;
  return processedData;
}

export {
  fetchWeatherData,
  processData,
};

(function logicController() {
  const cityInput = document.querySelector('#city-input');
  cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cityValue = cityInput.value;
      const weatherData = await fetchWeatherData(cityValue);
      if (isEmpty(weatherData) === true) {
        return 'Failed to fetch';
      }
      const processedData = processData(weatherData);
      console.log(processedData);
      reloadUI(processedData);
    }
  });
}());

/* FORMAT OF WEATHER APP DATA
base: "stations"
clouds: {all: 0}
cod: 200
coord: {lon: -118.2437, lat: 34.0522}
dt: 1660227215
id: 5368361
main:
feels_like: 294.32
humidity: 65
pressure: 1016
temp: 294.44
temp_max: 299.04
temp_min: 291.75
[[Prototype]]: Object
name: "Los Angeles"
sys: {type: 1, id: 3694, country: 'US', sunrise: 1660223503, sunset: 1660272285}
timezone: -25200
visibility: 10000
weather: Array(1)
0: {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
length: 1
[[Prototype]]: Array(0)
wind: {speed: 2.57, deg: 310}
[[Prototype]]: Object
*/
