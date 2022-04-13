//Variáveis
var Jog, velJ, velT, velB;
var PosXJ, PosYJ, dirXJ, dirYJ;
var jogo;
var frames;
var telaWidth, telaHeigth;
var contB, painelContB, tempoB;
var vidaPlaneta;


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
        velJ=8;
        velT=10;
        Jog.style.left=PosXJ+"px";
        Jog.style.top=PosYJ+"px";
    //Controle das Bombas
        clearInterval(tempoB); //Zera o intervalo de criação das bombas
        contBombas=150;
        velB=3;
        tempoB=setInterval(addBomba,1700); //Cria um intervalo entre a criação de cada bomba
    //Controles do Planeta
        vidaPlaneta=100;

    //Chama Funções
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
        controleTiros();
        controlaBombas()
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
function controleTiros(){
    var tiros=document.getElementsByClassName("tiroJog"); //Armazena todos os tiros criados com a classe 'tiroJog'
    var tam=tiros.length;
    for(var i=0; i<tam; i++){
        if(tiros[i]){
            var posTiro=tiros[i].offsetTop; //Pega a posição Y de cada tiro
            posTiro-=velT; //Faz com que o tiro suba em direção ao topo da tela.
            tiros[i].style.top=posTiro+"px";
            if(posTiro<0){
                tiros[i].remove();
            }
        }
    }
}

//IMPLEMENTANDO AS BOMBAS
function addBomba(){
    if(jogo){
        var y=0;
        var x=Math.random()*telaWidth; //Sorteia um número entre zero e a largura da tela
        var bomba=document.createElement("div");
        var att1=document.createAttribute("class");
        var att2=document.createAttribute("style");
        att1.value="bomba";
        att2.value="top:"+y+"px; left:"+x+"px";
        bomba.setAttributeNode(att1);
        bomba.setAttributeNode(att2);
        document.body.appendChild(bomba);
        contB--;
    }
}
function controlaBombas(){
    var bombas=document.getElementsByClassName("bomba"); //Armazena todas as bombas criadas com a classe 'bomba'
    var tam=bombas.length;
    for(var i=0; i<tam; i++){
        if(bombas[i]){
            var posBomba=bombas[i].offsetTop; //Pega a posição Y de cada bomba
            posBomba+=velB;  //Faz com que a bomba caia em direção ao final da tela.
            bombas[i].style.top=posBomba+"px";
            if(posBomba>telaHeigth){
                vidaPlaneta-=10;
                bombas[i].remove();
            }

        }
    }
}
