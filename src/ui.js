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

  city.textContent = weatherObj.city;
  weather.textContent = weatherObj.weather;
  date.textContent = 'TBA';
  time.textContent = 'TBA';
  temp.textContent = `${weatherObj.temp}º F`;
  feelsLike.textContent = weatherObj.feelsLike;
  humidity.textContent = weatherObj.humidity;
  windSpeed.textContent = weatherObj.windSpeed;
}

export {
  reloadUI,
};
