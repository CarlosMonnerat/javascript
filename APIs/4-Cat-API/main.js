'use strict'

async function loadGallery (){
    const gallery = document.getElementById("gallery");
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const response = await fetch(url);
    const data = await response.json();

    data.map(cat =>{
        const img = document.createElement('img');
        img.classList.add('cat-img');
        img.src = cat.url;
        gallery.appendChild(img);
    });
};

loadGallery();