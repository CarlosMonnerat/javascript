//Variáveis
var dirXJ, dirYJ



//Pressionando as Teclas
function taclaDown(){
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
function taclaUp(){
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