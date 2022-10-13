'use strict';

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSeg = tempo % 60;                                      //Tirando os minutos, restam apenas os segundos
    const qtdMin = Math.floor((tempo % (60 * 60)) /60);             //Tirando as horas, restam apenas os minutos
    const qtdHor = Math.floor((tempo % (60 * 60 * 24)) /(60 * 60)); //Tirando os dias, restam apenas as horas
    const qtdDia = Math.floor(tempo /(60 * 60 * 24));               //Converte Seg em Dias

    segundos.textContent = `0${qtdSeg}`.slice(-2);                  //Slice corta um array da esquerda para a direita. "-2" indica que queremos 2digitos da direita pq esquerda
    minutos.textContent = `0${qtdMin}`.slice(-2);
    horas.textContent = `0${qtdHor}`.slice(-2);
    qtdDia > 99 ?  dias.textContent = `0${qtdDia}`.slice(-3) : dias.textContent = `0${qtdDia}`.slice(-2);

}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);              //Para com o 'setInterval
    
    const contar = () => {
        if(tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);                        //Executa uma função a cada tempo determinado no segundo argumento
}

const tempoRestante = () => {
    const dataEvento = new Date('2022-10-30 08:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje)/1000);                            //Retorna em Milisegundo, por isso devemos dividir por mil para converter para segundos

}
contagemRegressiva(tempoRestante());