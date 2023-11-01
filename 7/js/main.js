import {appendPictures} from './gallery.js';
import {addThumbnailClickHandler} from './popup-picture.js';

const pictures = appendPictures();

appendPictures();
addThumbnailClickHandler(pictures);
