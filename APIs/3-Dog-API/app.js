const dogImage = document.getElementById('dog-image').addEventListener('click', updateDogImage);

 async function updateDogImage(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};
