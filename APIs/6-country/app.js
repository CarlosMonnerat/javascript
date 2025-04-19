'use strict'

async function obterPais (pais){
   const endpoint = `https://restcountries.com/v3.1/name/${pais}`;
   const response = await fetch(endpoint);
   return response.json();
}

function loadTela(dados){
   let bandeira = dados[0].flags.png;
   let nome = dados[0].name.common;
   let capital = dados[0].capital[0];

   document.getElementById('country-flag').src=`${bandeira}`;
   document.getElementById('country-name').innerHTML=`${nome}`;
   document.getElementById('country-capital').innerHTML=`${capital}`;
}


document.getElementById('country-input').addEventListener('keydown', async (event) => {
   if (event.key == 'Enter'){
      let dados = await obterPais(event.target.value);
      loadTela(dados);
   }
});