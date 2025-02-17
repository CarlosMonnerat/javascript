'use strict';

const preencheFormulario = (dados) =>{
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.estado;    
};

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);             //Testa se "cep" todos os caracteres estão na lista de 0 a 9

const pesquisarCep = async () =>{
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const response = await fetch(url);
        const dados = await response.json();
        if(dados.hasOwnProperty('erro')){                                       //Se este objeto possui a propriedade "erro"
            alert('CEP não encontrado. Verifique e tente novamente!');
            console.log(dados);
        }else{
            preencheFormulario(dados);
        }
    }else{
        alert('CEP inválido!');
    }    
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);