let num = document.getElementById('txtn')
let quadro = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []


function adicionar (){
    if (num.value.length == 0){
        window.alert('Por favor digite um número.')

    } else if (Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert(`O número deve estar entre 1 e 100. Digite outro número por favor.`)

    }else{
        let n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option') //Cria os itens dentro da barra de select
        item.text = (`O valor ${n} foi adicionado`)
        quadro.appendChild(item)
        res.innerHTML = '' //Caso o usuário digite outro número após ter finalizado, esta linha limpa o resultado.
    }
    num.value = '' //apaga o número digitado dps de clicar em add
    num.focus() // o cursor do mouse permanece na caixa de texto sem precisar clicar
}

function finalizar (){
    if(valores.length == 0){
        window.alert(`Nenhum valor foi digitado.`)
    }else{
    let n = Number(num.value)
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){ 
        soma += valores[pos]

        if(valores[pos] > maior) //Verifica quais são o maior e o menor elemento do vetor
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }

    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>Os valores adicionados foram: ${valores}.`
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi o ${maior}, e o menor valor foi o ${menor}.`
    res.innerHTML += `<p>A soma de todos é: ${soma}.</p>`
    res.innerHTML += `<p>E a média de todos os valores é ${media}.</p>`
    }

}