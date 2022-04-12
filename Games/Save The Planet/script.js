//Variáveis
var Jog, velJ;
var PosXJ, PosYJ, dirXJ, dirYJ;
var jogo;
var frames;
var telaWidth, telaHeigth;



//CONFIGURAÇÕES INICIAIS DO jOGO
function inicia(){
    jogo=true;
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
    gameLoop();
}

//COMANDOS DAS TECLAS PRESSIONADAS
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
        atira(PosXJ+17,PosYJ-20);
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
}
function controlaJog(){
    PosXJ+=dirXJ*velJ;
    PosYJ+=dirYJ*velJ;
    Jog.style.left=PosXJ+"px";
    Jog.style.top=PosYJ+"px";


}
function gameLoop(){
    if(jogo){
        //Funções de controle
        controlaJog();
    }
    frames=requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown",teclaDown);
document.addEventListener("keyup",teclaUp);


//COMANDOS DOS TIROS
function atira(x,y){
    var tiro=document.createElement("div");
    var att1=document.createAttribute("class");
    var att2=document.createAttribute("style");
    //var attn=document.createAttribute("src"); (seria para apontar a imagem do tiro)
    att1.value="tiroJog";
    att2.value="left:"+x+"px; top:"+y+"px";
    tiro.setAttributeNode(att1);
    tiro.setAttributeNode(att2);
    document.body.appendChild(tiro);

}
