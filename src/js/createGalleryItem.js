const createGalleryItem = images => {
  let string = '';
  images.forEach(({ preview, original, description }) => {
    string += `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  });
  return string;
};

export default createGalleryItem;
