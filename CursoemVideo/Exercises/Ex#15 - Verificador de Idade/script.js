function verificar() {
    var data = new Date()
    var ano = data.getFullYear()                                            //FullYear capta todos os 4 dígitos do ano atual (no dispositivo)

    var fano = document.getElementById('txtano')                            //puxar o ano digitado na caixa (f = formulário)
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')        
    }
    else{
        var fsex = document.getElementsByName('radsex')                     // [0]= 'm', [1]= 'f'
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')                             //Este comando é o msm que se tivessemos colocado "<img id='foto'> no html"
        img.setAttribute('id', 'foto') 

        
        if (fsex[0].checked){                                               //Se o que estiver marcado (checked) for [0], então genero = 'm'
            genero = 'Homem'
            if(idade >=0 && idade < 10){                    // (criança)
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21){                           // (Jovem)
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50){                           // (Adulto)
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{                                           // (Idoso)
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >=0 && idade < 10){                    // (criança)
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21){                           // (Jovem)
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50){                           // (Adulto)
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{                                           // (Idosa)
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'                                      // forma de centralizar o texto por Js sem CSS
        res.innerHTML = `${genero} com ${idade} anos. <br>`
        res.appendChild(img)                                                // Adiciona um elemento após
    
        
    } 
}