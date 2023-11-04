import { getPictures } from './data.js';
import { appendPictures } from './gallery.js';
import { renderPicture } from './popup-picture.js';

const pictures = getPictures();

appendPictures(pictures);
renderPicture(pictures);
