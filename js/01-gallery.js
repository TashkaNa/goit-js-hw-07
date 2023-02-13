import { galleryItems } from './gallery-items.js';

// Change code below this line

const list = document.querySelector(".gallery")
const listItem = galleryItems.map(({preview, original, description}) => { 
  return `
  <div class='gallery__item'>
  <a class='gallery__link' href="${original}">
  <img class=gallery__image src="${preview}" data-source="${original}" alt="${description}"/></a>
  </div>`
}).join('')

list.insertAdjacentHTML('afterbegin', listItem)
console.log(galleryItems);

list.addEventListener('click', onImageClick)

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
  instance.show()

  list.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close()
    }
  });

}
