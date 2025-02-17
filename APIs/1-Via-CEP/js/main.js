'use strict';

const preencheFormulario = (dados) =>{
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.estado;    
};

const pesquisarCep = async () =>{
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const dados = await response.json();
    if(dados.hasOwnProperty('erro')){
        console.log(dados);
    }else{
        preencheFormulario(dados);
    }
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);