let val = [8,1,7,4,2,9]
    console.log(val)

//      Forma FOR simplificada!

    for(let pos in val){
        console.log(`A posição ${pos} tem o valor ${val[pos]}`)

    }

val.indexOf(7)                                                          //Procura se tem o "7" no vetor, e se positivo indica a posição
val.indexOf(3)                                                          //Como o vetor "val" não tem o "3" ele retorna com "-1"

console.log(`O nº 7 está na posição ${val.indexOf(7)}`)

if(val.indexOf(3) == -1){
    console.log('O valor não existe no vetor')
}else{
console.log(`O nº 3 está na posição ${val.indexOf(3)}`)
}