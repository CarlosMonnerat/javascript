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

    const desenhos = [];
    desenhos[1] = document.getElementById("cabeçaimg");
    desenhos[2] = document.getElementById("corpoimg");
    desenhos[3] = document.getElementById("braçoEimg");
    desenhos[4] = document.getElementById("braçoDimg");
    desenhos[5] = document.getElementById("pernaEimg");
    desenhos[6] = document.getElementById("pernaDimg");
    desenhos[7] = document.getElementById("cabeçaMimg");


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
        for (let i = 1; i <= 7; i++) {
            desenhos[i].style.display = "none";
        }
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
                desenhos[erros].style.display = "block";
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
