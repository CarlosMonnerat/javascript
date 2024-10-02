'use strict';

const images = [
    {'id':'1','url':'imagens/bleach.jpg'},
    {'id':'2','url':'imagens/darkthanblack.jpg'},
    {'id':'3','url':'imagens/deathnote.jpg'},
    {'id':'4','url':'imagens/digimon.jpg'},
    {'id':'5','url':'imagens/dragonballz.jpg'},
    {'id':'6','url':'imagens/fullmetal.jpg'},
    {'id':'7','url':'imagens/hunterxhunter.jpg'},
    {'id':'8','url':'imagens/inuyasha.jpg'},
    {'id':'9','url':'imagens/ippo.png'},
    {'id':'10','url':'imagens/onepiece.jpg'},
    {'id':'11','url':'imagens/tenchi.jpg'},
    {'id':'12','url':'imagens/tenjhotenge.jpg'},
    {'id':'13','url':'imagens/yugioh.jpg'},
    {'id':'14','url':'imagens/yuyuhakusho.jpg'}
]

const containerItems = document.getElementById('container-itens')

const loadImages = (images, containerItems) =>{       
    images.forEach (image => {                              //Varre todas os itens do objeto
        containerItems.innerHTML += 
            `<div class='item'>
                <img src='${image.url}'
             </div>
            `
    })
}



const previous = ()=> {
    let items = document.querySelectorAll('.item')
    let lastItem = items[items.length-1]
    containerItems.insertBefore(lastItem, items[0]);       //Pega o último item e o insere no começo
}

const next = ()=> {
    let items = document.querySelectorAll('.item')
    containerItems.appendChild(items[0]);                   //Pega o Primeiro item e o insere no final
}


loadImages(images, containerItems);
document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next);
