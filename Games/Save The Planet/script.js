//Variáveis
var Jog, velJ;
var PosXJ, PosYJ, dirXJ, dirYJ;
var jogo;
var frames;
var telaWidth, telaHeigth;



//Configurações iniciais do Jogo
function inicia(){
    jogo=false;
    //Inicializações de Tela
        telaHeigth=window.innerHeight;
        telaWidth=window.innerWidth;
    //Inicializações do Jogador
        Jog=document.getElementById("naveJog");
        dirXJ=dirYJ=0;
        PosXJ=telaWidth/2;
        PosYJ=telaHeigth/2;
        velJ=10;
        Jog.style.left=PosXJ+"px";
        Jog.style.top=PosYJ+"px";

    

}

//Comandos das Teclas Pressionadas
function teclaDown(){
    var tecla=event.keyCode;
    if(tecla==37){ //Esquerda
        dirXJ=-1;
    }else if(tecla==39){ //Direita
        dirXJ=1;
    }
    if(tecla==38){ //Cima
        dirYJ=-1;
    }else if(tecla==40){ //Baixo
        dirYJ=1;
    }
    if(tecla==32){ //Espaço/Tiro
        //  TIRO
    }
}
function teclaUp(){
    var tecla=event.keyCode;
    if((tecla==37)||(tecla==39)){ // Esquerda/Direita
        dirXJ=0;
    }
    if((tecla==38)||(tecla==40)){ // Cima/Baixo 
        dirYJ=0;
    }
    if(tecla==32){ //Espaço/Tiro
        //  TIRO
    }
}
function controlaJog(){
    PosXJ+=dirXJ*velJ;
    PosYJ+=dirYJ*velJ;

}
function gameLoop(){
    if(jogo){
        //FUNÇÕES DE CONTROLE
    }
    frames=requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown",teclaDown);
document.addEventListener("keyup",teclaUp);