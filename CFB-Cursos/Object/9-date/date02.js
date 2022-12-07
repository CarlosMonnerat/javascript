// Criando um relógio

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0"+hora : hora

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0"+minuto : minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0"+segundo : segundo
    
    console.log(`${hora}:${minuto}:${segundo}`)
}
 // const intervalo = setInterval(relogio, 1000) //Chama a funcão relogio a cada 1000 milisegundos = 1 segundo

 relogio()


