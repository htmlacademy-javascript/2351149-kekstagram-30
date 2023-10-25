import {getPictures} from './data.js';

const pictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const generatedPictures = getPictures();
const fragment = document.createDocumentFragment();

generatedPictures.forEach(({url, description, likes, comments}) => {
  const clonedTemplate = templatePicture.cloneNode(true);
  clonedTemplate.querySelector('.picture__img').src = url;
  clonedTemplate.querySelector('.picture__img').alt = description;
  clonedTemplate.querySelector('.picture__comments').textContent = comments;
  clonedTemplate.querySelector('.picture__likes').textContent = likes;
  fragment.appendChild(clonedTemplate);
});

const appendPictures = () => {
  pictures.append(fragment);
};

export { appendPictures };
