import { getPictures } from './data.js';
import { appendPictures } from './gallery.js';
import { addThumbnailClickHandler } from './popup-picture.js';

const pictures = getPictures();

appendPictures(pictures);
addThumbnailClickHandler(pictures);
