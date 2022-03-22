//Elementos
var btIniciar;
var bola;
var cpu;
var jogador;
var txtPontos;

//Controle de Animação
var game;
var frames;

//Posições
var PosbolaX, PosbolaY;
var PosjogX, PosjogY;
var PoscpuX, PoscpuY;

//Direção de acordo com a tecla
var dirJy;

//Posições iniciais
var posBolaX0=475, posBolaY0=240;
var posJogY0=180;
var posCpuY0=180;

//Tamanhos
var campoX=0, campoY=0;
var campoW=960, campoH=500;
var barraW=20, barraH=140;
var bolaW=20, bolaH=20;

//Direção
var bolaX, bolaY;
var cpuY=0;

//Velocidde
var velBola;
var velCpu;
var velJog;

//Controle
var pontos=0;
var tecla;
var jogo=false;

//Funções

function inicializa(){ //Inicia as variáveis e add os eventos
    velBola=velCpu=velJog=8;
    btIniciar=document.getElementById("btIniciar");
    btIniciar=addEventListener("click",iniciaJogo);
    jogador=document.getElementById("dvJogador");
    cpu=document.getElementById("dvCPU");
    bola=document.getElementById("dvBola");
    txtPontos=document.getElementById("Pontos");
    document.addEventListener("keydown",teclaDw);
    document.addEventListener("keyup",teclaUp);
}

function iniciaJogo(){
    if(!jogo){
        cancelAnimationFrame(frames); //Se não cancelar ficará uma chamada em cima da outra
        jogo=true;
        dirJy=0;
        PosbolaX=posBolaX0;
        PosbolaY=posBolaY0;
        PosjogY=posJogY0;
        PoscpuY=posCpuY0;
        Game();
    }
}

function Game(){
    if(jogo){
        controlajog();
    }
    frames=requestAnimationFrame(Game);
}

function controlajog(){
    if(jogo){
        PosjogY+=velJog*dirJy;
        jogador.style.top=PosjogY+"px";
    }
}

function teclaDw(){
    tecla=event.keyCode;
    if(tecla==38){ //Cima
        dirJy=-1;
    }else if(tecla==40){// Baixo
        dirJy=+1;
    }
}

function teclaUp(){
    tecla=event.keyCode;
    if(tecla==38){ //Cima
        dirJy=0;
    }else if(tecla==40){// Baixo
        dirJy=0;
    }
}



