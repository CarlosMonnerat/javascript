let val = [8,1,7,4,2,9]
    console.log(val)

    //Forma FOR simplificada!
    for(let pos in val){
        console.log(`A posição ${pos} tem o valor ${val[pos]}`)

    }

val.indexOf(7) //Procura se tem o "7" no vetor, e se positivo indica a posição
val.indexOf(3) //Como o vetor "val" não tem o "3" ele retorna com "-1"
