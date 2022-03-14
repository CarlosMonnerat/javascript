var cxJog=document.getElementById("caixa")
var btjogar=document.getElementsByClassName("btjogar")
var btnova=document.getElementsByClassName("btnova")
var res = document.getElementById("jaUsado")

var biblioteca = ["brinquedo", "bicicleta", "carro", "televisao", "dinheiro", "shopping", "brincadeira","curso","computador","transporte","livraria",
"tecnologia","churrasco","impressora","telefone","internet","portaria","escola","carnaval","teclado","guitarra","bateria","chinelo","helicoptero","aviaçao","faculdade",
"martelo"];
var qtde=biblioteca.length-1;
var pos=Math.round(Math.random()*qtde); //'Math.round' Arredonda o número e 'Math.random' Gera um número aleatório entre 0 e "*qtde"
var palavra=biblioteca[pos];
var tam=palavra.length;
//var cxLetras=[];
var acertos;
var erros=0;
var errosMax=7;
//var desenhos=[];
//var acertou=false;
var jogando=false;


function iniciar(){
    jogando=true;
    //cxJog.value="";
    cxJog.focus(); //Mantém o cursor na caixa do jogador
    acertos=0;
    erros=0;
    res.innerHTML="Letras Digitadas:"+"<br>"+cxJog.value+",";

    alert("Palavra: "+palavra+"\n"+"Qtde de Letras: "+tam+"\n"+ "Letra digitada: "+cxJog.value)
    
    
    
    

}

function teste(){
    alert("funcionou");
}

function defletras(d){

}