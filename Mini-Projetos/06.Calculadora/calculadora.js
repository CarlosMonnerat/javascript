'use strict';

const display = document.getElementById('idisplay')
const numeros = document.querySelectorAll('[id*=tecla]') //Captura qualquer elemento com o ID determinado. O '*' indica que basta parte do atributo estar contido no ID
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true;
let operador;
let x;

const operacaoPendente = () => operador !== undefined;


const calcular = () =>{
    if(operacaoPendente()){
        const y = parseFloat(display.textContent);
        novoNumero = true;
        const resultado = eval(`${x}${operador}${y}`);
        atualizarDisplay(resultado);
            /*
                if(operador == '+'){
                    atualizarDisplay(x + y);
                }else if(operador == '-'){
                    atualizarDisplay(x - y);
                }else if(operador == '*'){
                    atualizarDisplay(x * y);
                }else if(operador == '/'){
                    atualizarDisplay(x / y);
                }
            */
    }
}


const atualizarDisplay = (texto) =>{
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
    
}

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        x = parseFloat(display.textContent);
        
    }
    
    
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click',inserirNumero));
operadores.forEach(operador => operador.addEventListener('click',selecionarOperador));
