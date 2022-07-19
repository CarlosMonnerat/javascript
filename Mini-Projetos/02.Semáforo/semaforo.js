const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

buttons.addEventListener('click',trafficLight)

const turnOn = {                //Objeto que contém três funções
    'red':    () => img.src='imagens/vermelho.png',
    'yellow': () => img.src='imagens/amarelo.png',
    'green':  () => img.src='imagens/verde.png',
    'automatic': () => setInterval(changeColor, 1000) //Executa a função a cada 1s
    // "setTimeout(changeColor,1000)" - Executa apenas uma vez dps de 1s

}

function trafficLight(event){
    turnOn[event.target.id]();  //Chama um método de um Objeto

}

const changeColor = ()=>{
    const color= 'red'
    turnOn[color]();

}