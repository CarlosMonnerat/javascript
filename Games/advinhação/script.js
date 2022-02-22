function sorteia(){

    return Math.round(Math.random() * 10);

}

let numero_secreto = sorteia();

let input = document.querySelector("input");
input.focus()

let tentativas = 0;

function verifica(){

    tentativas++;

    if(input.value == numero_secreto){

        alert("Você acertou em " + tentativas +  " tentativas");
        return;

    }
    else{

        if(tentativas == 5){

            alert("Você errou e atingiu o número máximo de tentativas! :/\n FIM DO JOGO o número secreto era " + numero_secreto);
            return;

        }

        alert("Você errou!");

    }

    input.value = " ";
    input.focus();

}

let botao = document.querySelector("button");
botao.onclick = verifica;
