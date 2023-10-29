const containerPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const thumbnails = document.querySelectorAll('.picture');

containerPictures.addEventListener('click', (e) => {
  const targetItem = e.target;
  if (targetItem.closest(thumbnails)) {
    bigPicture.classList.remove('hidden');
  }
});

// const addThumbnailClickHandler = (thumbnail, photo) => {
//   thumbnail.addEventListener('click', () => {
//     bigPicture.classList.remove('hidden');
//     bigPicture.src = photo;
//   });
// };

// for (let i = 0; i < thumbnails.length; i++) {
//   addThumbnailClickHandler(thumbnails[i]);
// }

// const onThumbnailClick = (evt) => {
//   if (evt.target.closest === 'A') {
//     bigPicture.classList.remove('hidden');
//   }
// };

export {};
