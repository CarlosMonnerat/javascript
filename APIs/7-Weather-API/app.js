'use strict';

const searchWeather = async (town) => {
   const key = 'f9488a76525c43ceafa210358252005';
   const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${town}&aqi=no`;
   const response = await fetch(url);
   const data = await response.json();
   return data;
};

const preencherForm = async (event) => {

   if(event.key === "Enter"){
      const place = event.target.value;
      const info = await searchWeather(place);
      console.log(info);
      console.log(info.location.name);

      document.getElementById('weather-image').src = info.current.condition.icon.replaceAll(64,128);
      document.getElementById('weather-city').textContent = info.location.name;
      document.getElementById('weather-temperature').textContent = `${info.current.temp_c}º C`;
      document.getElementById('detail-windSpeed').textContent = `${info.current.wind_kph} KM`;
      document.getElementById('detail-humidity').textContent = `${info.current.humidity}%`;


   }   
};

document.getElementById("weather-search").addEventListener('keydown', preencherForm);