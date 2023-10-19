import {getRandomInteger, getRandomArrayElement, generateCommentId, generatePhotoId} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;
const COMMENTS_COUNT = 20;

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Полярная экспедиция. Идем уже 2 недели. Полюса не видно. Андрей не дойдет, слабенький он. А нас слишком много в сани набилось...',
  'У нас на траулере коллектив был чисто мужской, суровый, так что свадьбы на корабле бывали редко.',
  'Продаются женские часики. Один часик 50 долларов.',
  'А зомби здесь тихие...',
  'Седалищный нерв очень тонко чувствует приближающиеся приключения.',
  'Как йоги делают себе клизму? Садятся в лужу и делают глубокий вдох.',
  'Жила-была девушка, очень рассеянная и забывчивая. Часто путала противозачаточные и успокоительные. Теперь у нее 9 детей, но ее это мало волнует.',
  'Нашей кошечке сначала тоже не понравился пылесос. А потом втянулась...',
  '35 баба ягодка опять. 41 баба снова мандарин.',
  'Разговор был коротким, а броски точными и красивыми.',
  'Очкарик очкарику друг, товарищ и запасные очки.',
];

const NAMES = ['Себастьян', 'Маркус', 'Хуан', 'Педро', 'Хесус', 'Джамал'];

const createMessage = () => Array.from(
  { length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {getPictures};
