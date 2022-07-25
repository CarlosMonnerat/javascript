'use strict';                                       //Capta e avisa erros e má práticas (Modo Rigoroso)

const sons = {                                      //JSON
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'

}

const criarDiv = (texto) =>{
    const div = document.createElement('div')       //Cria uma 'Div'
    div.classList.add('key')                        //Add uma 'class="key" na Div criada
    div.id = texto                                  //add um 'Id = "texto"'
    div.textContent = texto                         //Add um conteúdo dentro da Div

    document.getElementById('icontainer').appendChild(div)

}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)    //Para cada 'chave' do 'Json sons', chama a função 'criarDiv'
/*
    Ao usar 'const exibir = (sons) =>' pegamos todas as "chaves" e todos os "objetos". Para pegarmos apenas as "chaves" usamos "Object.keys()"
    'Object.keys()' - Pega todas as chaves(letras) do 'Obj Json' e retorna um array com todas elas
    'forEach()' - Percorre todos os elementos do Array
    - Como a Função não tem um retorno e só tem uma linha, não é necessário usar '{}'
*/

const tocarSom = (letra) => {
    const audio = new Audio(`sounds/${sons[letra]}`)
    audio.play();

}
const ativarDiv = (evento) => {
    const letra = evento.target.id
    const letraPermitida = sons.hasOwnProperty(letra)       //Verifica se "letra" existe no Json "sons"
    if(letraPermitida){
        tocarSom(letra);
    }
}



exibir(sons);
document.getElementById('icontainer').addEventListener('click', ativarDiv);