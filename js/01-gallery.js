import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(function ({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.dataSource = original;
  galleryImage.alt = description;

  gallery.appendChild(galleryItem);
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImage);
});

gallery.addEventListener('click', openOriginalIMG);

function openOriginalIMG(e) {
  e.preventDefault();
  const imgOriginal = e.target.dataSource;
  const instance = basicLightbox.create(`
    <img src="${imgOriginal}" width="800" height="600">
`);

  instance.show();

  function closeModal() {
    instance.close();
  }

  document.addEventListener('keyup', e => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      closeModal();
    }
  });
}
