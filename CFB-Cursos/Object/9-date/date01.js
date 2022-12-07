const data = new Date()

let sem = data.getDay()                 //Pega o número dos dias da Semana. 0 = Domingo ... 6 = Sábado

let dia = data.getDate()                //Pega os dias do Mês
dia = dia < 10 ? "0"+dia : dia

let mes = data.getMonth()               //Pega o número do Mês
mes = mes + 1                           //Os meses começam do zero, ou seja 0 = Janeiro ... 11 = Dezembro
mes = mes < 10 ? "0"+mes : mes


let ano = data.getFullYear()            //Pega o ano com 4 digitos


console.log(`Dada: ${sem} ${dia}/${mes}/${ano}`)
