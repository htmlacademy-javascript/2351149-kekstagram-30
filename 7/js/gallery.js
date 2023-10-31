import {getPictures} from './data.js';

const containerPictures = document.querySelector('.pictures');
const templatePictures = document.querySelector('#picture').content.querySelector('.picture');
const generatedPictures = getPictures();
const fragmentPictures = document.createDocumentFragment();

generatedPictures.forEach(({url, description, likes, comments}) => {
  const clonedTemplate = templatePictures.cloneNode(true);
  clonedTemplate.querySelector('.picture__img').src = url;
  clonedTemplate.querySelector('.picture__img').alt = description;
  clonedTemplate.querySelector('.picture__comments').textContent = comments.length;
  clonedTemplate.querySelector('.picture__likes').textContent = likes;
  fragmentPictures.appendChild(clonedTemplate);
});

const appendPictures = () => {
  containerPictures.append(fragmentPictures);
};

export {appendPictures};
