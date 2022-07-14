const turnOn=document.getElementById('turnOn')
const turnOff=document.getElementById('turnOff')
const lamp=document.getElementById('lamp')

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken) /* dbl = double */

function verifica(){
 //Faz uma varredura de string, procurando um trecho específico. Se False retorna '-1', se True retorna um nº > -1
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if( !verifica()){       //Se 'verifica=False' a lâmpada não está quebrada
        lamp.src='imagens/ligada.jpg'
    }
}

function lampOff(){
    if( !verifica()){
        lamp.src='imagens/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src='imagens/quebrada.jpg'
}