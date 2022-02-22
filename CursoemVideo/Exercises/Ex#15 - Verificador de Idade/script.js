function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Full paga os 4 dígitos
    var fano = document.getElementById('txtano') //puxar o ano digitado na caixa
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //Forma de centralizar a linha no JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    
        
    } 
}