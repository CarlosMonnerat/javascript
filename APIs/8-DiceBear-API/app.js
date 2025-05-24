'use strict';

async function extrairEstilosDiceBear () { 
   const urlProxy ='https://api.codetabs.com/v1/proxy?quest=';
   const url = 'https://www.dicebear.com/styles/';
   const response = await fetch(`${urlProxy}${url}`);
   const html = await response.text();
   const parser = new DOMParser();
   const doc = parser.parseFromString(html, 'text/html');
   const elementos = doc.querySelectorAll('p[data-v-10acf738]');
   const estilos = [...elementos].map(e => e.textContent);
   return estilos;
};

async function carregarEstilos () {
   const estilos = await extrairEstilosDiceBear();
   const select = document.getElementById('estilo-select');
   estilos.forEach(e => {
      const option = document.createElement('option');
      option.value = e.toLowerCase().replace(' ', '-');
      option.textContent = e;
      select.appendChild(option);
   });  
};

function gerarAvatar () {
   console.log("Gerando Avatar");
};

document.getElementById('nome-input').addEventListener('input', gerarAvatar);
document.getElementById('estilo-select').addEventListener('change', gerarAvatar);

carregarEstilos();