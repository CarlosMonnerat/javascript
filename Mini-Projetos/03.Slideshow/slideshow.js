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

const container = document.getElementById('container-itens')

const loadImages = (images, container) =>{       
    images.forEach (image => {                  //Varre todas as imagens
        container.innerHTML += 
            `<div class='item'>
                <img src='${image.url}'
             </div>
            `
    })
}

loadImages(images, container);