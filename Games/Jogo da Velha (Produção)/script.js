var jogo=[]; //Vai guardar as informações jogadas e ou vazias
var tabuleiro=[]; // vai armazenar as informações visuais
var quemJoga=0; // 0=Usuário  1=CPU
var verifica; //vai verificar se houve vencedor ou não
var jogando=true;
var nivel=1;
var jogadaCpu=1;
var quemComeça=1;

function inicia(){
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""] ];
    tabuleiro=[
        [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
        [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")] ];

    atualizaTabuleiro();
}


function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="X";
                    quemJoga=1;
                }
            break;
            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="X";
                    quemJoga=1;
                }
            break;
            case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X";
                    quemJoga=1;
                }
            break;
            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X";
                    quemJoga=1;
                }
            break;
            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X";
                    quemJoga=1;
                }
            break;
            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X";
                    quemJoga=1;
                }
            break;
            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X";
                    quemJoga=1;
                }
            break;
            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X";
                    quemJoga=1;
                }
            break;
            default: //Case 9
                if(jogo[2][2]==""){
                    jogo[2][2]="X";
                    quemJoga=1;
                }
            break;
        }
        atualizaTabuleiro();
    }
}

function atualizaTabuleiro(){
    for(var linha=0; linha<3; linha++){ // Percorre as linhas da matriz
        for(var coluna=0; coluna<3; coluna++){ // Percorre as colunas da matriz
            if(jogo[linha][coluna]=="X"){
                tabuleiro[linha][coluna].innerHTML="X";
                tabuleiro[linha][coluna].style.cursor="default";
            }else if(jogo[linha][coluna]=="O"){
                tabuleiro[linha][coluna].innerHTML="O";
                tabuleiro[linha][coluna].style.cursor="default";
            }else{
                tabuleiro[linha][coluna].innerHTML="";
                tabuleiro[linha][coluna].style.cursor="pointer";
            }

        }
    }
}


