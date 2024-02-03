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
    display.textContent += operador;    
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

const existeDecimal = () => display.textContent.indexOf(',') !== -1; //'indexOf' procura uma string, caso existir, retorna a posição, se não existir retorna '-1'
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

//Captando as Teclas do teclado
const mapaTeclado = {
    '0'         : 'tecla0',
    '1'         : 'tecla1',
    '2'         : 'tecla2',
    '3'         : 'tecla3',
    '4'         : 'tecla4',
    '5'         : 'tecla5',
    '6'         : 'tecla6',
    '7'         : 'tecla7',
    '8'         : 'tecla8',
    '9'         : 'tecla9',
    '/'         : 'operadorDividir',
    '*'         : 'operadorMultiplicar',
    '-'         : 'operadorSubtrair',
    '+'         : 'operadorAdicionar',
    '='         : 'igual',
    'Enter'     : 'igual',
    ' '         : 'igual',
    'Backspace' : 'backspace',
    'c'         : 'limparCalculo',
    'Escape'    : 'limparDisplay',
    ','         : 'decimal',
    'Shift'     : 'inverter'    
}

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;

    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click(); 
}
document.addEventListener('keydown', mapearTeclado);