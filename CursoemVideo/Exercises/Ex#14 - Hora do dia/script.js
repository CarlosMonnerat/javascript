function carregar(){
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0 (Linha de Testes)
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas.  `

    if(hora>=5 && hora < 12){
        msg.innerHTML += 'Bom Dia!'
        document.body.style.background = '#e2cd9f'                      //Altera a cor de acordo com o cód. indicado
        img.src = 'fotomanha.png'
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML += 'Boa Tarde!'
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.png'
    }
    else if (hora > 18 && hora < 24) {
        msg.innerHTML += 'Boa Noite!'
        document.body.style.background = '#515154'
        img.src = 'fotonoite.png'
    }
    else{
        msg.innerHTML += 'Boa Madrugada!'
        document.body.style.background = '#515154'
        img.src = 'fotonoite.png'
    }


}

