import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
const createGalleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return  `<li class='gallery__item'>
    <a class='gallery__link' href="${original}">
    <img class=gallery__image src="${preview}" alt="${description}"/></a>
  </li>`
}).join('')
galleryList.insertAdjacentHTML('afterbegin', createGalleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
  });
