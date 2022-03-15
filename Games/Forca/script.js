var cxJog=document.getElementById("caixa")
var btjogar=document.getElementsByClassName("btjogar")
var btnova=document.getElementsByClassName("btnova")
var res = document.getElementById("jaUsado")

var biblioteca = ["brinquedo","bicicleta", "carro", "televisao", "dinheiro", "shopping", "brincadeira","curso","computador","transporte","livraria",
"tecnologia","churrasco","impressora","telefone","internet","portaria","escola","carnaval","teclado","guitarra","bateria","chinelo","helicoptero","aviaçao",
"faculdade","martelo","amarelo","amigo","amor","branco","boneca","celular","elefante","furacao","girafa","papagaio","janela","limonada","passarinho","peixe",
"chaleira","onibus","caminhao","motocicleta","gelatina","parque","geladeira","cachorro","basquete","assombraçao","ardiloso","caminho","champanhe","chuveiro",
"coelho","contexto","coraçao","esqueleto","esquerda","impacto","modernidade","quarentena","refeiçao","reportagem","campeonato","amendoim","pedreiro","moeda",
"xicara","vermelho","serenata","biblioteca","caatinga","honra","cultura","exceçao","ambiçao","excesso","piedade","abstrato","paradoxo","comunhao","esperança",
"anatomia","nostalgia","compaixao","excelente","dicionario","disciplina","felicidade","significado","importante","conveniente","melancia","morango","morcego"];
var qtde=biblioteca.length-1;
var pos=Math.round(Math.random()*qtde); //'Math.round' Arredonda o número e 'Math.random' Gera um número aleatório entre 0 e "*qtde"
var palavra=biblioteca[pos];
var tam=palavra.length;
var salvapalavra;
var acertos=0;
var erros=0;

var desenhos=[];
    desenhos[1]=document.getElementById("cabeçaimg");
    desenhos[2]=document.getElementById("corpoimg");
    desenhos[3]=document.getElementById("braçoEimg");
    desenhos[4]=document.getElementById("braçoDimg");
    desenhos[5]=document.getElementById("pernaEimg");
    desenhos[6]=document.getElementById("pernaDimg");
    desenhos[7]=document.getElementById("cabeçaMimg");
    

var acertou=false;
var jogando=false;



function defLetras(d){
    var obj;
    for(var i=0;i<20;i++){ // '20' é o número máximo de letras
        obj=document.getElementById("letra"+i).value=""; 
        obj=document.getElementById("letra"+i).style.display="none"; //A princípio definimos todas as letras com o display 'None' para que não apareça nenhuma
    }
    for(var i=0; i<d; i++){ //Então usamos o parametro 'd' para mostrar apenas as letras necessárias
        obj=document.getElementById("letra"+i).style.display="inline-block";
    }

}

function jogar(){
    if(cxJog.value==""){
        alert("Digite uma Letra!")
        cxJog.focus();
    }else if(jogando=true){
        var obj;
        var letraTmp; //Vai receber a posição de cada letra
        var pesq;
        var letra=cxJog.value;
        cxJog.value="";
        cxJog.focus();
        pesq=palavra.match(letra); //Verifica se a letra digitada existe dentro da palavra
        acertou=false;
        while(pesq!=null){ //Se for diferente de 'NUll' significa que a letra foi encontrada
            letraTmp=palavra.search(letra); //Pesquisa por todas as ocorrencias dentro da palavra.
            obj=document.getElementById("letra"+letraTmp).value=letra; //Armazena a letra digitada nas suas devidas posições 
            palavra=palavra.replace(letra,'0'); //Substitui a letra da palavra por '0', para que não dê como ocorrência novamente
            acertos++;
            pesq=palavra.match(letra);
            acertou=true;
        }
        if(!acertou){
           document.getElementById("letrasdig").innerHTML+=letra.toUpperCase()+",";
           erros++;
           desenhos[erros].style.display="block";
            if(erros==7){
                jogando=false;
                alert("GAME OVER! \n A palavra era: "+salvapalavra+"\n TENTE NOVAMENTE!");
                NovaPalavra();
            }
           
        }
        
        if(acertos==tam){
            jogando=false;
            alert("PARABÉNS, VOCÊ GANHOU!!! \n Palavra: "+salvapalavra);
            NovaPalavra();
        }

    }
    


}
function NovaPalavra(){
    pos=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tam=palavra.length;
    salvapalavra=palavra;
    cxJog.value="";
    cxJog.focus();
    acertos=0;
    erros=0;
    document.getElementById("letrasdig").innerHTML="";
    defLetras(tam);
    for(var i=1;i<8;i++){
    desenhos[i].style.display="none";
    }
    
}