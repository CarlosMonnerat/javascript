const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let setIntervalId = null;           //Variável para parar o setInteval

buttons.addEventListener('click',trafficLight)

const turnOn = {                    //Objeto que contém três funções
    'red':    () => img.src='imagens/vermelho.png',
    'yellow': () => img.src='imagens/amarelo.png',
    'green':  () => img.src='imagens/verde.png',
    'automatic': () => setIntervalId= setInterval(changeColor, 1000)    //Executa a função a cada 1s
    // "setTimeout(changeColor,1000)" - Executa apenas uma vez dps de 1s
}

function trafficLight(event){
    stopAutomatic();                //Para o setinterval anterior toda vez que é acionado
    turnOn[event.target.id]();      //Chama um método de um Objeto
}

const changeColor = ()=>{
    const colors= ['red','yellow','green']
    const color= colors[colorIndex]
    turnOn[color]();
    nextIndex();
}

const nextIndex = ()=>{
   colorIndex = colorIndex < 2 ? ++colorIndex : 0;
   
    /* OU...
        if(colorIndex < 2){
            colorIndex++
            }else{
                colorIndex=0;
        } 
    */
}

const stopAutomatic= ()=>{
    clearInterval(setIntervalId);
}