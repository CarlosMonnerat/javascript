'use strict'

const dogImage = document.getElementById('dog-image');

 async function updateDogImage(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    dogImage.src = data.message;
};

dogImage.addEventListener('click', updateDogImage);
