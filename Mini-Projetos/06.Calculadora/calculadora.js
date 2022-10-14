'use strict';

const display = document.getElementById('idisplay')
const numeros = document.querySelectorAll('[id*=tecla]') //Captura qualquer elemento com o ID determinado. O '*' indica que basta parte do atributo estar contido no ID
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true;

const atualizarDisplay = (texto) =>{
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
    
}

const selecionarOperador = () =>{
    novoNumero = true;
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click',inserirNumero));
operadores.forEach(operador => operador.addEventListener('click',selecionarOperador));

