import { isKeydown } from './util.js';
import { isTargetClick } from './util.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (isKeydown(evt, 'Escape')) {
    evt.preventDefault();
    hideMessage();
  }
};


const onCloseButtonClick = () => {
  hideMessage();
};

const onBodyClick = (evt) => {
  if (isTargetClick(evt, '.success__inner') || isTargetClick(evt, '.error__inner')) {
    return;
  }
  hideMessage();
};

function hideMessage () {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
}

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  element.querySelector(buttonClass).addEventListener('click', onCloseButtonClick);
};

const showSuccessMessage = () => {
  showMessage(successMessageElement, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessageElement, '.error__button');
};

export { showSuccessMessage, showErrorMessage };

