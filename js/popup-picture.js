import {isKeydown, isTargetClick} from './util.js';

const containerPictures = document.querySelector('.pictures');
// const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const modal = document.querySelector('.big-picture');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const thumbnails = modal.querySelectorAll('.picture__img');
const bigPicture = modal.querySelectorAll('.big-picture__img img');
// const likesCount = modal.querySelector('.likes-count');
// const commentShownCount = modal.querySelector('.social__comment-shown-count');
// const commentTotalCount = modal.querySelector('.social__comment-total-count');
// const CommentCount = modal.querySelector('.social__comment-count');
// const commentsLoader = modal.querySelector('.comments-loader');

const onCancel = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onCancel);
  modalCloseButton.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onCancel);
  modalCloseButton.removeEventListener('click', closeModal);
}

const onContainerPictures = (evt) => {
  if (isTargetClick(evt, '.picture')) {
    openModal();
  }
};

containerPictures.addEventListener('click', onContainerPictures);

const addThumbnailClickHandler = (thumbnail) => {
  containerPictures.addEventListener('click', (evt) => {
    if (isTargetClick(evt, '.picture')) {
      evt.preventDefault();
      bigPicture.src = thumbnail.url;
    }
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i]);
}

export {};
