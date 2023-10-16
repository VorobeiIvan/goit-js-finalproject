import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();

console.log(galleryItems);
