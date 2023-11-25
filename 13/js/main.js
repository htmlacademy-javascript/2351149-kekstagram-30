import { appendPictures } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filters.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    appendPictures(pictures);
    initFilter(pictures);
  } catch {
    showErrorMessage();
  }
};

bootstrap();
