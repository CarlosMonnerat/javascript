'use strict';

const preencherForm = (event) => {
   if(event.key === "Enter")  console.log(event.key);
   
};

document.getElementById("weather-search").addEventListener('keydown', preencherForm);