import { biblioteca } from './palavras.js';

document.addEventListener("DOMContentLoaded", function () {
    const cxJog = document.getElementById("caixa");
    const letrasDig = document.getElementById("letrasdig");
    const dvpalavra = document.getElementById("dvpalavra");

    let palavra = "";
    let salvapalavra = "";
    let tam = 0;
    let acertos = 0;
    let erros = 0;
    let jogando = false;

    const desenhos = [
        null, // índice 0 vazio só para manter o índice começando em 1
        document.getElementById("cabeçaimg"),
        document.getElementById("corpoimg"),
        document.getElementById("braçoDimg"),
        document.getElementById("braçoEimg"),
        document.getElementById("pernaDimg"),
        document.getElementById("pernaEimg"),
    ];

// Mostra apenas a imagem atual e esconde todas as anteriores
    function mostrarDesenho(numero) {
        for (let i = 1; i < desenhos.length; i++) {
            desenhos[i].style.display = i === numero ? "block" : "none";
        }
    }


    function criarInputs() {
        for (let i = 0; i < 20; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = "letra" + i;
            input.className = "letra";
            input.maxLength = 1;
            input.readOnly = true;
            input.style.display = "none";
            dvpalavra.appendChild(input);
        }
    }

    function defLetras(d) {
        for (let i = 0; i < 20; i++) {
            const input = document.getElementById("letra" + i);
            input.value = "";
            input.style.display = i < d ? "inline-block" : "none";
        }
    }

    function NovaPalavra() {
        const pos = Math.floor(Math.random() * biblioteca.length);
        palavra = biblioteca[pos];
        salvapalavra = palavra;
        tam = palavra.length;
        acertos = 0;
        erros = 0;
        jogando = true;
        cxJog.value = "";
        cxJog.focus();
        letrasDig.innerHTML = "";
        defLetras(tam);
        mostrarDesenho(0); // esconde todos
    }

    function jogar() {
        const letra = cxJog.value.toLowerCase();
        if (letra === "") {
            alert("Digite uma letra!");
            cxJog.focus();
            return;
        }

        if (!jogando) return;

        cxJog.value = "";
        cxJog.focus();

        let pesq = palavra.match(letra);
        let acertou = false;

        while (pesq !== null) {
            const letraTmp = palavra.search(letra);
            document.getElementById("letra" + letraTmp).value = letra;
            palavra = palavra.substring(0, letraTmp) + '0' + palavra.substring(letraTmp + 1);
            acertos++;
            pesq = palavra.match(letra);
            acertou = true;
        }

        if (!acertou) {
            letrasDig.innerHTML += letra.toUpperCase() + ",";
            erros++;
            if (desenhos[erros]) {
                mostrarDesenho(erros);
            }

            if (erros === 7) {
                jogando = false;
                alert("GAME OVER!\nA palavra era: " + salvapalavra + "\nTENTE NOVAMENTE!");
                NovaPalavra();
                return;
            }
        }

        if (acertos === tam) {
            jogando = false;
            alert("PARABÉNS, VOCÊ GANHOU!!!\nPalavra: " + salvapalavra);
            NovaPalavra();
        }
    }

    // Event listeners
    document.querySelector(".btnjogar").addEventListener("click", jogar);
    document.querySelector(".btnnova").addEventListener("click", NovaPalavra);
    cxJog.addEventListener("keypress", function (e) {
        if (e.key === "Enter") jogar();
    });

    // Inicialização
    criarInputs();
    NovaPalavra();
});
