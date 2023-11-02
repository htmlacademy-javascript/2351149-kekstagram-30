import {isKeydown, isTargetClick} from './util.js';

const containerPictures = document.querySelector('.pictures');
// const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const modal = document.querySelector('.big-picture');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture__img');
// const commentShownCount = modal.querySelector('.social__comment-shown-count');
// const commentTotalCount = modal.querySelector('.social__comment-total-count');
const commentCount = modal.querySelector('.social__comment-count');
const commentsLoader = modal.querySelector('.comments-loader');

// const getCommetnts = ({ avatar, message, name }) => {
//   const clonedComment = templateComment.cloneNode(true);

//   clonedComment.querySelector('.social__picture').src = avatar;
//   clonedComment.querySelector('.social__picture').alt = name;
//   clonedComment.querySelector('.social__text').textContent = message;

//   return clonedComment;
// };

const onCancel = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  // modal.querySelector('.big-picture__img img').src = data.url;
  // modal.querySelector('.likes-count').textContent = data.likes;
  // modal.querySelector('.social__caption').textContent = data.description;

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

// function isId(array) {
//   return array.name === "id";
// }

const addThumbnailClickHandler = (pictures) => {
  // console.log(pictures);
  containerPictures.addEventListener('click', (evt) => {
    if (isTargetClick(evt, '.picture')) {
      evt.preventDefault();
      // const x = pictures.find(({ id }) => id === '');
      // const pictureObject = pictures.filter((item) => item.id === pictureID);
      openModal();
    }

  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i]);
}

const thumbnail = document.querySelector('.picture__img');
console.log(thumbnail);

export {addThumbnailClickHandler};
