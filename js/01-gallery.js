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
 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => document.addEventListener('keydown', onEscClick),
      onClose: () => document.removeEventListener('keydown', onEscClick),
    }
  
  );
  instance.show();

  function onEscClick(e) {
    if (e.code === 'Escape') {
      instance.close()
    }
  }
}