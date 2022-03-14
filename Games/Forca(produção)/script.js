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
var acertou=false;
var jogando=false;


function iniciar(){
    jogando=true;
    cxJog.focus();                      //Mantém o cursor na caixa do jogador
    acertos=0;
    erros=0;
    defLetras(tam);
    
    
    //alert("Palavra: "+palavra+"\n"+"Qtde de Letras: "+tam+"\n"+ "Letra digitada: "+cxJog.value)
    
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

function jogar(){
    if(cxJog.value==""){
        alert("Digite uma Letra!")
    }
    
    if(jogando=true){
        var obj;
        var letraTmp; //Vai receber a posição de cada letra
        var pesq;
        var letra=cxJog.value;
        cxJog.value="";
        cxJog.focus();
        acertou=false;
        pesq=palavra.match(letra); //Verifica se a letra digitada existe dentro da palavra
        while(pesq!=null){ //Se for diferente de 'NUll' significa que a letra foi encontrada
            letraTmp=palavra.search(letra); //Pesquisa por todas as ocorrencias dentro da palavra.
            obj=document.getElementById("letra"+letraTmp).value=letra; //Armazena a letra digitada nas suas devidas posições 
            palavra=palavra.replace(letra,'0'); //Substitui a letra da palavra por '0', para que não dê como ocorrência novamente
            acertos++;
            pesq=palavra.match(letra);
            acertou=true;
        }
        if(!acertou){
            //document.getElementById("textoinicial").innerHTML+="Letras Digitadas: <br>";
            document.getElementById("letrasdig").innerHTML+=letra.toUpperCase()+",";
            erros++;
        
        }

        


    }
    


}
function NovaPalavra(){
    res.innerHTML="Letras Digitadas:"+"<br>"+cxJog.value;
    pos=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tam=palavra.length;
    defLetras(tam);
}