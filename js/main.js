import {appendPictures} from './gallery.js';
import './popup-picture.js';

appendPictures();

const containerPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
// const thumbnails = document.querySelectorAll('.picture');

containerPictures.addEventListener('click', (click) => {
  const targetItem = click.target;
  if (targetItem.closest(containerPictures)) {
    bigPicture.classList.remove('hidden');
  }
});
