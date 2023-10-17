import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.gallery__image');

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

gallery.innerHTML = createMarkup(galleryItems);

gallery.addEventListener('click', openOriginalIMG);
let modalOpen = false;
let instance;
function openOriginalIMG(e) {
  e.preventDefault();

  const imgOriginal = e.target.closest('.gallery__link');

  instance = basicLightbox.create(`
    <img src="${imgOriginal.getAttribute('href')}" width="800" height="600">
  `);

  instance.show();
  modalOpen = true;
  document.addEventListener('keydown', closeModal);
}

function closeModal(event) {
  if (event.key === 'Escape' && modalOpen) {
    instance.close();
    modalOpen = false;
    document.removeEventListener('keydown', closeModal);
  }
}
