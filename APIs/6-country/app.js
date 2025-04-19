'use strict'

async function obterPais (pais){
   const endpoint = `https://restcountries.com/v3.1/name/${pais}`;
   const response = await fetch(endpoint);
   const data = response.json();
   return data;
}

function loadTela(dados){
   let bandeira = dados.flags.png;
   let nome = dados.name.common;
   let capital = dados.capital[0];

   document.getElementById('country-flag').src=`${bandeira}`;
   document.getElementById('country-name').textContent=`${nome}`;
   document.getElementById('country-capital').textContent=`${capital}`;
}


document.getElementById('country-input').addEventListener('keydown', async (event) => {
   if (event.key == 'Enter'){
      let dados = await obterPais(event.target.value);
      loadTela(dados[0]);
   }
});