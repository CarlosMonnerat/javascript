let calcular=document.getElementById('calcular').addEventListener('click', imc);

function imc(){
    let nome=document.getElementById('nome').value
    let altura=document.getElementById('altura').value
    let peso=document.getElementById('peso').value
    let resultado=document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso!== ''){
        const valorIMC=(peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `Olá ${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        alert("Verifique os valores preenchidos e tente novamente!")
    }
}