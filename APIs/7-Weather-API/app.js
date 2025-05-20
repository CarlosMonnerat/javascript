'use strict';

const searchWeather = async (town) => {
   const key = 'f9488a76525c43ceafa210358252005';
   const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${town}&aqi=no`;
   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
};

const preencherForm = (event) => {
   if(event.key === "Enter"){
      const place = event.target.value;
      const info = searchWeather(place);
   }   
};

document.getElementById("weather-search").addEventListener('keydown', preencherForm);