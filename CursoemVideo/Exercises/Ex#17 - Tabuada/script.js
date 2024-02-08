function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) { //Se a caixa de texto está vazia...
        window.alert(`Por favor digite um número.`)
        
    } else {
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = '' //Para limpar a barra antes de imprimir outra tabuada
        while (cont <= 10){
            let item = document.createElement('option') //Cria os itens dentro da barra de select
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }
    }

}