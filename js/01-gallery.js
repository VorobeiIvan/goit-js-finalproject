import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('.gallery');

galleryItems.forEach(function ({ preview, original, description }) {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = original;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = preview;
  img.dataSource = original;
  img.alt = description;

  ul.appendChild(li);
  li.appendChild(a);
  a.appendChild(img);
});

ul.addEventListener('click', openOriginalIMG);

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
