function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
// Verifica se os dados foram digitados corretamente.

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        window.alert (`[ERRO] Faltam Dados! Verifique e tente novamente`)
    } 
    else{
        res.innerHTML= `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido. Vamos considerar Passo = 1.')
            p = 1
        
    }

// Começa a contagem

        if (i < f ){
            //contagem crescente
            for(var c= i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` //Código no site Full Emoji List (Unicode)
            }
        } else {
            //contagem decrescente
            for (var c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
          
}

    
   









