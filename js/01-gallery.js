// import { galleryItems } from './gallery-items.js';

// const ul = document.querySelector('.gallery');

// galleryItems.forEach(function ({ preview, original, description }) {
//   const li = document.createElement('li');
//   li.classList.add('gallery__item');
//   const a = document.createElement('a');
//   a.classList.add('gallery__link');
//   a.href = original;
//   const img = document.createElement('img');
//   img.classList.add('gallery__image');
//   img.src = preview;
//   img.dataSource = original;
//   img.alt = description;

//   ul.appendChild(li);
//   li.appendChild(a);
//   a.appendChild(img);
// });

// ul.addEventListener('click', openOriginalIMG);

// function openOriginalIMG(e) {
//   e.preventDefault();
//   const imgOriginal = e.target.dataSource;
//   const instance = basicLightbox.create(`
//     <img src="${imgOriginal}" width="800" height="600">
// `);

//   instance.show();

//   function closeModal() {
//     instance.close();
//   }

//   document.addEventListener('keyup', e => {
// if (e.key === 'Escape') {
//   closeModal();
// }
// if (e.key === 'Enter') {
//   closeModal();
// }
//   });
// }

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

function openOriginalIMG(e) {
  e.preventDefault();

  const imgOriginal = e.target.dataset.source;

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
