import { renderPicture } from './popup-picture.js';
import { debounce } from './util.js';

const filterElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

const MAX_RANDOM_FILTER = 10;

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while(randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if(!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),
};

let currentFilter = FilterEnum.DEFAULT;

const repaint = (evt, filter, data) => {
  if(currentFilter !== filter) {
    const filteredData = filterHandlers[filter](data);
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((item) => item.remove());
    renderPicture(filteredData);
    const currentActiveEl = filterForm.querySelector('.img-filters__button--active');
    currentActiveEl.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = filter;
  }
};

const debouncedRepaint = debounce(repaint);

const onFilterButton = (filterButton, filter, data) => {
  filterButton.addEventListener('click', (evt) => {
    debouncedRepaint(evt, filter, data);
  });
};

const initFilter = (data) => {
  filterElement.classList.remove('img-filters--inactive');
  onFilterButton(defaultButton, FilterEnum.DEFAULT, data);
  onFilterButton(randomButton, FilterEnum.RANDOM, data);
  onFilterButton(discussedButton, FilterEnum.DISCUSSED, data);
};

export { initFilter };
