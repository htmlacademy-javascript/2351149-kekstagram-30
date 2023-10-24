import {getPictures} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPictures = getPictures();
const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, description, likes, comments}) => {
  const clonedTemplate = pictureTemplate.cloneNode(true);
  clonedTemplate.querySelector('.picture__img').src.textContent = url;
  clonedTemplate.querySelector('.picture__img').alt.textContent = description;
  clonedTemplate.querySelector('.picture__comments').textContent = comments;
  clonedTemplate.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(clonedTemplate);
});

pictures.appendChild(similarListFragment);
