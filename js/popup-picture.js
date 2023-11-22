import { isKeydown, isTargetClick } from './util.js';
import { appendPictures } from './gallery.js';

const containerPictures = document.querySelector('.pictures');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const modal = document.querySelector('.big-picture');
const modalCloseButton = modal.querySelector('.big-picture__cancel');
const commentsListElement = modal.querySelector('.social__comments');
const totalCommentCountElement = modal.querySelector('.social__comment-total-count');
const commentCountElement = modal.querySelector('.social__comment-shown-count');
const commentsLoaderElement = modal.querySelector('.comments-loader');

let commentsCountShown = 0;
const COMMENTS_COUNT_SHOW = 5;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const newComment = commentElement.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
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

const showPicture = (pictureData) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  modal.querySelector('.big-picture__img img').src = pictureData.url;
  modal.querySelector('.big-picture__img img').alt = pictureData.description;
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
    showPicture(pictureData);
  });
  appendPictures(pictures);
};

document.addEventListener('keydown', onCancel);
modalCloseButton.addEventListener('click', closeModal);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { renderPicture };
