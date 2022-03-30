import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryListItems = createGalleryItems(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', galleryListItems)



const galleryImage = document.querySelectorAll('.gallery__image');

galleryListEl.addEventListener('click', (evt) => {
    if (evt.target.nodeName === 'IMG') {
        const elIndex = [...galleryImage].indexOf(evt.target)
        const instance = basicLightbox.create(`
            <img src="${galleryItems[elIndex].original}" width="800" height="600">
        `)

        instance.show()
    }
})



function createGalleryItems(imagesArray) {
   
    return imagesArray.map(el => `<div class="gallery__item"><img src="${el.preview}" alt="${el.description}" class="gallery__image"></div>`
    ).join('')
}
