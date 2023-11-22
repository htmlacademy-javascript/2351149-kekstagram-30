const REMOVE_MESSAGE_TIMEOUT = 5000;

const templateErrorMessage = document.querySelector('#data-error').content.querySelector('.data-error');

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const isKeydown = (evt, keydown) => evt.key === keydown;
const isTargetClick = (evt, selector) => evt.target.closest(selector);

const generateDataId = createIdGenerator();

const showErrorMessage = () => {
  const errorElement = templateErrorMessage.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export { generateDataId, isKeydown, isTargetClick, showErrorMessage };
