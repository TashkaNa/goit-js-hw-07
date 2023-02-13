import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
galleryList.addEventListener('click', onImageClick)

const createGalleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
  <div class='gallery__item'>
  <a class='gallery__link' href="${original}">
  <img class=gallery__image src="${preview}" data-source="${original}" alt="${description}"/></a>
  </div>`
}).join('')
galleryList.insertAdjacentHTML('afterbegin', createGalleryMarkup)

function onImageClick(e) {
  e.preventDefault();
  galleryList.addEventListener('keydown', onEscClick);
  galleryList.addEventListener('click', onInstanceClose)
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  function onInstanceClose() {
    instance.close()
    galleryList.removeEventListener('keydown', onEscClick);
  }

  function onEscClick(e) {
    if (e.code === 'Escape') {
      instance.close()
      galleryList.removeEventListener('click', onInstanceClose);
    }
  }
}