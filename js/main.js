import { renderPicture } from './popup-picture.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    renderPicture(pictures);
  } catch {
    showErrorMessage();
  }
};

bootstrap();
