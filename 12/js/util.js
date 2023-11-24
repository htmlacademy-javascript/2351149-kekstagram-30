const REMOVE_MESSAGE_TIMEOUT = 5000;

const templateErrorMessage = document.querySelector('#data-error').content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorElement = templateErrorMessage.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const isKeydown = (evt, keydown) => evt.key === keydown;
const isTargetClick = (evt, selector) => evt.target.closest(selector);

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isKeydown, isTargetClick, showErrorMessage, debounce };
