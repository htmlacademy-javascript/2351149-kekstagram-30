import {isEscapeKey} from './util.js';

const containerPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const cancelBigPicture = document.querySelector('.big-picture__cancel');
// const thumbnails = document.querySelectorAll('.picture');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onContainerPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    openBigPicture();
  }
};

containerPictures.addEventListener('click', onContainerPicture);
cancelBigPicture.addEventListener('click', closeBigPicture);

// const  = () => {

// };

// const addThumbnailClickHandler = (thumbnail, photo) => {
//   thumbnail.addEventListener('click', () => {
//     bigPicture.classList.remove('hidden');
//     bigPicture.src = photo;
//   });
// };

// for (let i = 0; i < thumbnails.length; i++) {
//   addThumbnailClickHandler(thumbnails[i]);
// }

// const onThumbnailClick = (evt) => {
//   if (evt.target.closest === 'A') {
//     bigPicture.classList.remove('hidden');
//   }
// };

export {};
