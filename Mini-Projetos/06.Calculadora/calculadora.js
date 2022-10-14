'use strict';

const display = document.getElementById('idisplay')
const numeros = document.querySelectorAll('[id*=tecla]') //Captura qualquer elemento com o ID determinado. O '*' indica que basta parte do atributo estar contido no ID
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true;
let operador;
let x;

const operacaoPendente = () => operador !== undefined;

const calcular = () =>{
    if(operacaoPendente()){ //'parseFloat' analisa um argumento (converte para string se necessário) e retorna um numero do tipo float
        let y = parseFloat(display.textContent.replace(',','.')); //'replace' troca o primeiro argumento pelo segundo
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
        display.textContent = texto.toLocaleString('BR'); //'toLocaleString('BR')' busca a notação decimal usada no BR
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
    
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click',inserirNumero));

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        
        novoNumero = true;
        operador = evento.target.textContent;
        x = parseFloat(display.textContent.replace(',','.'));
    }    
}

operadores.forEach(operador => operador.addEventListener('click',selecionarOperador));

//Botões Auxiliares
const ativarIgual = () =>{
    calcular();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click', ativarIgual);


const limpaDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limpaDisplay);


const limpaCalculo = () =>{
    limpaDisplay();
    operador = undefined;
    novoNumero = true;
    x = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limpaCalculo);


const removeUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removeUltimoNumero);


const inverteSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
}
document.getElementById('inverter').addEventListener('click', inverteSinal);

const existeDecimal = () => display.textContent.indexOf(',') !== -1; //'indexOf' procura uma string, se existir, retorna a posição, se não retorna '-1'
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(',');
        }else{
            atualizarDisplay('0,');
        }
    }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal);
