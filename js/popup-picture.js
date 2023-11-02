import { isKeydown, isTargetClick } from './util.js';

const containerPictures = document.querySelector('.pictures');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const modal = document.querySelector('.big-picture');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture__img');
// const commentShownCount = modal.querySelector('.social__comment-shown-count');
// const commentTotalCount = modal.querySelector('.social__comment-total-count');
const commentCount = modal.querySelector('.social__comment-count');
const commentsLoader = modal.querySelector('.comments-loader');
let chosenPicture;

const getCommetnts = ({ avatar, message, name }) => {
  const clonedComment = templateComment.cloneNode(true);

  clonedComment.querySelector('.social__picture').src = avatar;
  clonedComment.querySelector('.social__picture').alt = name;
  clonedComment.querySelector('.social__text').textContent = message;

  return clonedComment;
};

const onCancel = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal({url, likes, description}) {
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancel);
  modalCloseButton.addEventListener('click', closeModal);
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCancel);
  modalCloseButton.removeEventListener('click', closeModal);
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
}

const addThumbnailClickHandler = (pictures) => {
  containerPictures.addEventListener('click', (evt) => {
    const thumbnail = isTargetClick(evt, 'a');
    if (thumbnail) {
      evt.preventDefault();
      chosenPicture = pictures[thumbnail.dataset.pictureId - 1];
      openModal(chosenPicture);
    }
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i]);
}

export { addThumbnailClickHandler };
