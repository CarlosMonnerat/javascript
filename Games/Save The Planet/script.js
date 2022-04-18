//VARIÁVEIS
var Jog, velJ, velT, velB;
var PosXJ, PosYJ, dirXJ, dirYJ;
var jogo;
var frames;
var telaWidth, telaHeigth, telaMsg;
var bombas, contB, painelContB, tempoB;
var vidaPlaneta, barraPlaneta;
var iexp, isom;


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
        contB=10;
        velB=3;
        tempoB=setInterval(addBomba,1700); //Cria um intervalo entre a criação de cada bomba
    //Controles do Planeta
        vidaPlaneta=300;
        barraPlaneta=document.getElementById("barraPlaneta");
        barraPlaneta.style.width=vidaPlaneta+"px";
    //Controles de Explosões
        iexp=0;
        isom=0;
    //Controle de Tela
        telaMsg=document.getElementById("telaMsg");

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
        controlaBombas();
    }
    gerenciaBarra();
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
            colisãoTiroBomba(tiros[i]);
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
    bombas=document.getElementsByClassName("bomba"); //Armazena todas as bombas criadas com a classe 'bomba'
    var tam=bombas.length;
    for(var i=0; i<tam; i++){
        if(bombas[i]){
            var posBomba=bombas[i].offsetTop; //Pega a posição Y de cada bomba
            posBomba+=velB;  //Faz com que a bomba caia em direção ao final da tela.
            bombas[i].style.top=posBomba+"px";
            if(posBomba>telaHeigth){
                vidaPlaneta-=3;
                criaExplosao(2,bombas[i].offsetLeft,null);
                bombas[i].remove();
            }
        }
    }
}

//COLISÃO DOS TIROS COM AS BOMBAS
function colisãoTiroBomba(tiro){
    var tam=bombas.length;
    for(var i=0; i<tam; i++){
        if(bombas[i]){
            //TESTES DE COLISÃO
            if( 
                ( 
                    (tiro.offsetTop<=(bombas[i].offsetTop+40))&&        //Cima do tiro com baixo da bomba
                    ((tiro.offsetTop+6)>=(bombas[i].offsetTop))         //Baixo do tiro com cima da bomba
                                            
                )
                &&
                ( 
                    (tiro.offsetLeft<=(bombas[i].offsetLeft+24))&&      //Esquerda do tiro com direita da bomba 
                    ((tiro.offsetLeft+6)>=(bombas[i].offsetLeft))       //Direita do tiro com esquerda da bomba
                )
            ){
                criaExplosao(1,bombas[i].offsetLeft,bombas[i].offsetTop);
                bombas[i].remove();
                tiro.remove();
            }
        }
    }
}

//EFEITO DAS EXPLOSÕES
function criaExplosao(tipo,x,y){ //Tipo=1 - Ar , Tipo=2 - Chão
    
    //Elementos da Explosão
        var explosao=document.createElement("div");
        var img=document.createElement("img");
        var som=document.createElement("audio");
    //Atributos para a Div
        var att1=document.createAttribute("class");
        var att2=document.createAttribute("style");
        var att3=document.createAttribute("id");
    //Atributos para a Img
        var att4=document.createAttribute("src");
    //Atributos para o Audio
        var att5=document.createAttribute("src");
        var att6=document.createAttribute("id");
    //Valores
    if(tipo==1){
        att1.value="explosaoAr";
        att2.value="top:"+y+"px; left:"+x+"px";
        att4.value="Gifts/explosao_ar.gif?"+new Date(); //em vez de um contador, usamos a hora para que cada Gift seja chamado como um diferente
    }else{
        att1.value="explosaoChao";
        att2.value="top:"+(telaHeigth-57)+"px; left:"+(x-17)+"px";
        att4.value="Gifts/explosao_chao.gif?"+new Date(); 
    }
    att3.value="explosao"+iexp; //'iexp' é um contador para que cada explosão seja diferente uma da outra
    att5.value="Audios/exp1.mp3?"+new Date();
    att6.value="som"+isom;
    //Add os valores aos Elementos
        explosao.setAttributeNode(att1);
        explosao.setAttributeNode(att2);
        explosao.setAttributeNode(att3);
        img.setAttributeNode(att4);
        som.setAttributeNode(att5);
        som.setAttributeNode(att6);
    //Inseri os Elementos no Jogo
        explosao.appendChild(img);
        explosao.appendChild(som);
        document.body.appendChild(explosao);
    //Play no Som
        document.getElementById("som"+isom).play();
    //Contadores (Índice de explosão)
        iexp++;
        isom++;
    //Remove as explosões (A cada 3 explosões uma é removida)
    if(document.getElementById("explosao"+(iexp-3))){
        document.getElementById("explosao"+(iexp-3)).remove();
    }
}

//GERENCIA BARRA DE LIFE DO PLANETA
function gerenciaBarra(){
    barraPlaneta.style.width=vidaPlaneta+"px";
    if(contB<=0){
        jogo=false;
        clearInterval(tempoB); //Zera o intervalo de criação das bombas
        telaMsg.style.backgroundImage="url('Imagens/youwin.jpg')";
        telaMsg.style.display="block";
    }
    if(vidaPlaneta<=0){
        jogo=false;
        clearInterval(tempoB); //Zera o intervalo de criação das bombas
        telaMsg.style.backgroundImage="url('Imagens/gameover.jpg')";
        telaMsg.style.display="block";
    }
}