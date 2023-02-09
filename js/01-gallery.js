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

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()