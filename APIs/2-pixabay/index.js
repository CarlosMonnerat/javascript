'use strict'

const searchImages = async (text) => {
    const key = '40146163-68a905c3c59f3c5b5d6ac25d7';
    const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
    const response = await fetch(url);
    return response.json();
}

const createCard = ({webformatURL, pageURL}) =>{
    const card = document.createElement('div');
    card.classList.add('card-container');
    card.innerHTML = `
    <a href="${pageURL}" class="card-image">
        <img src=${webformatURL} >
    </a>
    <div class="card-info">
        <div class="card-tags">
            <a href="#"> tag_1 </a>
            <a href="#"> tag_2 </a>
            <a href="#"> tag_3 </a>
        </div>
        <div class="card-action">
            <div class="card-like">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>1234</span>
            </div>
            <div class="card-comments">
                <i class="fa-regular fa-comment"></i>
                <span>34</span>
            </div>
            <div class="card-save">
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
    </div>
    `;
    return card;
}

//Como 'searchImages' é uma func asincrona, ela tbm retorna uma promise. Por isso 'loadGallery' tbm precisa trabalhar de forma sincrona
const loadGallery = async (textSearch) => {
    const container = document.querySelector('.container-gallery');
    const {hits} = await searchImages (textSearch);  //Desestruturação
    const cards = hits.map(createCard);
    //'replaceChildren' tem q receber objs, mas 'cards' é um array. Então usa-se '...'(spread) para espalhar o array 
    container.replaceChildren(...cards); 
    console.log(cards);
}

const handleKeypress = ({key, target}) => {     //caracteristica do js chamada 'destructuring'. => (event.key, event.target)
    if(key === 'Enter'){
         loadGallery(target.value);
    }   
}

document.getElementById('search-input').addEventListener('keypress', handleKeypress);