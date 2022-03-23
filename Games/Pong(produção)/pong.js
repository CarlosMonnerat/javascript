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
var posJogX0=0, posJogY0=180;
var posCpuX0=930, posCpuY0=180;

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
        velBola=velCpu=velJog=8;
        cancelAnimationFrame(frames); //Se não cancelar ficará uma chamada em cima da outra
        jogo=true;
        dirJy=0;
        bolaY=0;
        if((Math.random()*10)<5){
            bolaX=-1;
        }else{
            bolaX=1;
        }
        PosbolaX=posBolaX0;
        PosbolaY=posBolaY0;
        PosjogX=posJogX0;
        PosjogY=posJogY0;
        PoscpuX=posCpuX0
        PoscpuY=posCpuY0;
        Game();
    }
}

function Game(){
    if(jogo){
        controlajog();
        controlaBola();
    }
    frames=requestAnimationFrame(Game);
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

function controlajog(){
    if(jogo){
        PosjogY+=velJog*dirJy;
        if(PosjogY+barraH >= campoH || PosjogY<=0){
            PosjogY+=(velJog*dirJy)*-1;
        }
        jogador.style.top=PosjogY+"px";
    }
}

function controlaBola(){
    PosbolaX+=velBola*bolaX;
    PosbolaY+=velBola*bolaY;
// Colisão com o Jogador
    if( (PosbolaX <=PosjogX+barraW) &&  ((PosbolaY+bolaH>=PosjogY) && (PosbolaY<=PosjogY+barraH))   ){
        bolaY=(((PosbolaY+(bolaH/2))-(PosjogY+(barraH/2)))/16);
        bolaX*=-1;
    }
// Colisão com a CPU
    if(
        (PosbolaX >=PoscpuX-barraW) &&
        ((PosbolaY+bolaH>=PoscpuY) && (PosbolaY<=PoscpuY+barraH))
    ){
        bolaY=(((PosbolaY+(bolaH/2))-(PosjogY+(barraH/2)))/16);
        bolaX*=-1;
    }

//Colisão com os Limites Superior e Inferior
    if((PosbolaY>=480)||(PosbolaY<=0)){
        bolaY*=-1;
    }
//Colisão com os limites Laterias
  //DIREITA
    if(PosbolaX>=(campoW-bolaW)){
        velBola=0;
        PosbolaX=posBolaX0;
        PosbolaY=posBolaY0;
        PosjogX=posJogX0;
        PosjogY=posJogY0;
        PoscpuX=posCpuX0;
        PoscpuY=posCpuY0;
        pontos++;
        txtPontos.value=pontos;
        jogador.style.top=PosjogY+"px";
        cpu.style.top=PoscpuY+"px";
        jogo=false;
  //ESQUERDA
    }else if(PosbolaX<=0){
        velBola=0;
        PosbolaX=posBolaX0;
        PosbolaY=posBolaY0;
        PosjogX=posJogX0;
        PosjogY=posJogY0;
        PoscpuX=posCpuX0;
        PoscpuY=posCpuY0;
        pontos--;
        txtPontos.value=pontos;
        jogador.style.top=PosjogY+"px";
        cpu.style.top=PoscpuY+"px";
        jogo=false;

    }
    

    bola.style.left=PosbolaX+"px";
    bola.style.top=PosbolaY+"px";
    
}



