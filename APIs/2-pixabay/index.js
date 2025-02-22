'use strict'

const loadGallery = (textSearch) => {
    const imagesinfo = searchImages (textSearch);
    console.log(imagesinfo);
}

const handleKeypress = ({key, target}) => {     //caracteristica do js chamada 'destructuring'. => (event.key, event.target)
    if(key === 'Enter'){
         loadGallery(target.value);
    }   
}

document.getElementById('search-input').addEventListener('keypress', handleKeypress);