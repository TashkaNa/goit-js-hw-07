import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
galleryList.addEventListener('click', onGalleryImageClick)

const createGalleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return  `
  <li class='gallery__item'>
  <a class='gallery__link' href="${original}">
  <img class=gallery__image src="${preview}" alt="${description}" title="${description}"/></a>
  </li>`
}).join('')
galleryList.insertAdjacentHTML('afterbegin', createGalleryMarkup)



function onGalleryImageClick(e) {
  e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
    return;
  }
 
  const lightbox = new SimpleLightbox('.gallery__item .gallery__link', {
    captionDelay: 250,
    captionData: 'alt',
  });
  
}
