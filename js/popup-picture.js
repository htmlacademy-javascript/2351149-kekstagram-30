import { isKeydown, isTargetClick } from './util.js';

const containerPictures = document.querySelector('.pictures');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const modal = document.querySelector('.big-picture');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const commentsListElement = modal.querySelector('.social__comments');
const totalCommentCountElement = modal.querySelector('.social__comment-total-count');
const commentCountElement = modal.querySelector('.social__comment-shown-count');
const commentsLoaderElement = modal.querySelector('.comments-loader');
const modalBigPicture = modal.querySelector('.big-picture__img img');

let commentsCountShown = 0;
const COMMENTS_COUNT_SHOW = 5;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const newComment = commentElement.cloneNode(true);
  const newCommentAvatar = newComment.querySelector('.social__picture');
  newCommentAvatar.src = avatar;
  newCommentAvatar.alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = () => {
  commentsCountShown += COMMENTS_COUNT_SHOW;

  if (commentsCountShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsListElement.innerHTML = '';
  commentsListElement.append(fragment);

  commentCountElement.textContent = commentsCountShown;
  totalCommentCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = () => renderComments();

const onCancel = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseButtonClick = () => closeModal();

const showPicture = (pictureData) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancel);
  modalCloseButton.addEventListener('click', onCloseButtonClick);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

  modalBigPicture.src = pictureData.url;
  modalBigPicture.alt = pictureData.description;
  modal.querySelector('.likes-count').textContent = pictureData.likes;
  modal.querySelector('.social__caption').textContent = pictureData.description;

  comments = pictureData.comments;
  if (comments.length > 0) {
    renderComments(comments);
  }
};

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCancel);
  modalCloseButton.removeEventListener('click', onCloseButtonClick);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
  commentsCountShown = 0;
}

const renderPicture = (pictures) => {
  containerPictures.addEventListener('click', (evt) => {
    const thumbnail = isTargetClick(evt, 'a');
    if (! thumbnail) {
      return;
    }
    evt.preventDefault();
    const pictureId = +thumbnail.dataset.pictureId;
    const pictureData = pictures.find(({ id }) => id === pictureId);
    commentsCountShown = 0;
    showPicture(pictureData);
  });
};

export { renderPicture };
