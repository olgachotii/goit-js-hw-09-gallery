import { refs, dataSources } from '../index.js';

export function leftClick(curentIndex) {
  let nextIndex = curentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = dataSources.length - 1;
  }
  refs.lightboxImageEl.src = dataSources[nextIndex];
}

export function rightClick(curentIndex) {
  let nextIndex = curentIndex + 1;
  if (nextIndex === dataSources.length) {
    nextIndex = 0;
  }
  refs.lightboxImageEl.src = dataSources[nextIndex];
}
