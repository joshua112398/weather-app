import { format } from 'date-fns';

function updateIcon(iconUI, weatherID) {
  iconUI.removeAttribute('class');
  iconUI.classList.add('wi');
  iconUI.classList.add(`wi-owm-${weatherID}`);
}

function reloadUI(weatherObj) {
  const weather = document.querySelector('#weather');
  const city = document.querySelector('#city');
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const temp = document.querySelector('#temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const feelsLike = document.querySelector('#feels-like-temp');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  const currentDate = new Date(weatherObj.time);
  city.textContent = weatherObj.city;
  weather.textContent = weatherObj.weather;
  date.textContent = format(currentDate, 'MM/dd/yyyy');
  time.textContent = format(currentDate, 'hh:mm aa');
  temp.textContent = `${weatherObj.temp}º F`;
  feelsLike.textContent = `${weatherObj.feelsLike}º F`;
  humidity.textContent = `${weatherObj.humidity}%`;
  windSpeed.textContent = `${weatherObj.windSpeed} mi/hr`;

  updateIcon(weatherIcon, weatherObj.weatherID);
}

export {
  reloadUI,
};
