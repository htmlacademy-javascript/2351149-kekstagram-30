import {isKeydown, isTargetClick} from './util.js';

const containerPictures = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const modalClose = document.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture');
const bigPicture = document.querySelectorAll('.big-picture__img').img;

const openModal = () => {
  modal.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
};

const onCancel = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    closeModal();
  }
};

const onContainerPictures = (evt) => {
  if (isTargetClick(evt, '.picture')) {
    openModal();
  }
};

containerPictures.addEventListener('click', onContainerPictures);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', onCancel);

const addThumbnailClickHandler = (thumbnail, photo) => {
  thumbnail.addEventListener('click', () => {
    bigPicture.src = photo;
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i]);
}

export {};
