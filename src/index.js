import './sass/main.scss';
import galleryItems from './js/galleryItems.js';
import createGalleryItem from './js/createGalleryItem';
import { onClick, closeModal } from './js/openModal';
import { rightClick, leftClick } from './js/galleryScrolling';

export const refs = {
  galleryEl: document.querySelector('.gallery'),
  lightboxEL: document.querySelector('.js-lightbox'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  buttonModalCloseEl: document.querySelector('.lightbox__button'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
};

const listGalleryItem = createGalleryItem(galleryItems);
refs.galleryEl.insertAdjacentHTML('afterbegin', listGalleryItem);

refs.galleryEl.addEventListener('click', onClick);
refs.buttonModalCloseEl.addEventListener('click', closeModal);
refs.lightboxOverlayEl.addEventListener('click', closeModal);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && refs.lightboxEL.classList.contains('is-open')) {
    closeModal();
  }
});

export const dataSources = galleryItems.map(galleryItem => {
  return galleryItem.original;
});

document.addEventListener('keydown', e => {
  if (!refs.lightboxEL.classList.contains('is-open')) {
    return;
  }
  const curentIndex = dataSources.indexOf(refs.lightboxImageEl.src);
  if (e.key === 'ArrowLeft') {
    leftClick(curentIndex);
  } else if (e.key === 'ArrowRight') {
    rightClick(curentIndex);
  }
});
