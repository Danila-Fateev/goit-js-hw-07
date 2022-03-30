import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryListItems = createGalleryItems(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', galleryListItems)



const galleryImage = document.querySelectorAll('.gallery__image');

galleryListEl.addEventListener('click', (evt) => {
    evt.preventDefault()
    if (evt.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
            <img src="${evt.target.dataset.source}" width="800" height="600">
        `)

        instance.show()
    }
})



function createGalleryItems(imagesArray) {
   
    return imagesArray.map(el => `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img src="${el.preview}" alt="${el.description}" data-source="${el.original}" class="gallery__image"></a></div>`
    ).join('')
}
