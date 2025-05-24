'use strict';

async function extrairEstilosDiceBear () { 
   const urlProxy ='https://api.codetabs.com/v1/proxy?quest=';
   const url = 'https://www.dicebear.com/styles/';
   const response = await fetch(`${urlProxy}${url}`);
   const html = await response.text();
   const parser = new DOMParser();
   const doc = parser.parseFromString(html, 'text/html');
   console.log(doc);
};

async function carregarEstilos () {
   const estilos = await extrairEstilosDiceBear();
};

carregarEstilos();