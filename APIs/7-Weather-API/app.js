'use strict';

const changeBgcolor = (temp) => {
   let bgcolor = '';
   if(temp <= 0){
      bgcolor = '#7bb3ff'; //Azul Claro
   }else if (temp > 0 && temp <= 10){
      bgcolor = '#4a90e2'; //Azul
   }
   else if (temp > 10 && temp <= 20){
      bgcolor = '#00FF7F'; //Verde
   }
   else if (temp > 20 && temp <= 30){
      bgcolor = '#ffd166'; //Amarelo
   }else {
      bgcolor = '#ff6b6b'; //Rosa
   }

   document.documentElement.style.setProperty('--bg-color', bgcolor);
   document.documentElement.style.setProperty('--text-color', '#000');
   document.documentElement.style.setProperty('--body-color', `${bgcolor}55`);
};

const searchWeather = async (town) => {
   const key = 'f9488a76525c43ceafa210358252005'; //pass: weatherapi%2442
   const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${town}&aqi=no`;
   const response = await fetch(url);
   const data = await response.json();
   return data;
};

const preencherForm = async (event) => {

   if(event.key === "Enter"){
      const place = event.target.value;
      const info = await searchWeather(place);

      document.getElementById('weather-image').src = info.current.condition.icon.replaceAll(64,128);
      document.getElementById('weather-city').textContent = info.location.name;
      document.getElementById('weather-temperature').textContent = `${info.current.temp_c}º C`;
      document.getElementById('detail-windSpeed').textContent = `${info.current.wind_kph} km/h`;
      document.getElementById('detail-humidity').textContent = `${info.current.humidity}%`;

      changeBgcolor(info.current.temp_c);


   }   
};

document.getElementById("weather-search").addEventListener('keydown', preencherForm);