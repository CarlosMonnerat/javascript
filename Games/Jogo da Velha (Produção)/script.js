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
        ["","",""]
    ];

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
        }
    }
}


