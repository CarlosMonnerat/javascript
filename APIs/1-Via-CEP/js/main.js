'use strict';

const pesquisarCep = async () =>{
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const dados = await response.json();
    console.log(dados);
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);