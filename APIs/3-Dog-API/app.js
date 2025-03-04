'use strict'

const dogImage = document.getElementById('dog-image');

 async function updateDogImage(){
    const breedInfo = document.getElementById('breed-name');
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    const breedName = data.message.split('/')[4];

    dogImage.src = data.message;
    breedInfo.textContent = breedName;

    
};

dogImage.addEventListener('click', updateDogImage);
