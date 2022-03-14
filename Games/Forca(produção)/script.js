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
    cxJog.focus();                      //Mantém o cursor na caixa do jogador
    acertos=0;
    erros=0;
    res.innerHTML="Letras Digitadas:"+"<br>"+cxJog.value;
    //pos=Math.round(Math.random()*qtde);
    //palavra=biblioteca[pos];
    //tam=palavra.length;
    defLetras(tam);
    //document.getElementById("").innerHTML="";
    
    alert("Palavra: "+palavra+"\n"+"Qtde de Letras: "+tam+"\n"+ "Letra digitada: "+cxJog.value)
    
    
    
    

}

function teste(){
    alert("funcionou");
}

function defLetras(d){
    var obj;
    for(var i=0;i<20;i++){ // '20' é o número máximo de letras
        obj=document.getElementById("letra"+i).value=""; 
        obj=document.getElementById("letra"+i).style.display="none"; //A princípio definimos todas as letras com o display 'None' para que não apareça nenhuma
    }
    for(var i=0; i<d; i++){ //Então usamos o parametro 'd' para mostrarmos apenas as letras necessárias
        obj=document.getElementById("letra"+i).style.display="inline-block";
    }

}