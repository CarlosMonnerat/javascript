const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0"+dia : dia

let mes = data.getMonth()
mes = mes + 1                           //Os meses começam do zero, ou seja 0 = Janeiro .... 11 = Dezembro
mes = mes < 10 ? "0"+mes : mes


let ano = data.getFullYear()


console.log(`${dia}/${mes}/${ano}`)
