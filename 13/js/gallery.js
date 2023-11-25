import { renderPicture } from './popup-picture.js';

const containerPictures = document.querySelector('.pictures');
const templatePictures = document.querySelector('#picture').content.querySelector('.picture');
const fragmentPictures = document.createDocumentFragment();

const appendPictures = (array) => {
  array.forEach(({id, url, description, likes, comments}) => {
    const clonedTemplate = templatePictures.cloneNode(true);
    clonedTemplate.querySelector('.picture__img').src = url;
    clonedTemplate.querySelector('.picture__img').alt = description;
    clonedTemplate.querySelector('.picture__comments').textContent = comments.length;
    clonedTemplate.querySelector('.picture__likes').textContent = likes;
    clonedTemplate.dataset.pictureId = id;
    fragmentPictures.appendChild(clonedTemplate);
  });
  containerPictures.append(fragmentPictures);
  renderPicture(array);
};

export { appendPictures };
