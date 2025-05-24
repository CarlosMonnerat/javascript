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
   const nome = document.getElementById('nome-input').value.trim();
   const estilo = document.getElementById('estilo-select').value;
   const avatarContainer = document.getElementById('avatar-container');

   if(!nome || estilo == 'Selecione um estilo'){
      avatarContainer.textContent = 'Preencha o nome e escolha um estilo.'
   }else{
      const url = `https://api.dicebear.com/9.x/${estilo}/svg?seed=${nome}`;
      const img = document.createElement('img');
      img.src = url;
      avatarContainer.replaceChildren(img);
      console.log("Gerando Avatar:", url);
   }   
};


carregarEstilos();
document.getElementById('nome-input').addEventListener('input', gerarAvatar);
document.getElementById('estilo-select').addEventListener('change', gerarAvatar);