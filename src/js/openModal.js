import { refs } from '../index.js';

export function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightboxEL.classList.add('is-open');
  refs.lightboxImageEl.src = e.target.dataset.source;
  refs.lightboxImageEl.alt = e.target.alt;
}

export function closeModal() {
  refs.lightboxEL.classList.remove('is-open');
  refs.lightboxImageEl.src = '';
  refs.lightboxImageEl.alt = '';
}
