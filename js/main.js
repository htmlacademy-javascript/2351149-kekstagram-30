const generateArray = (length) => (
  [new Array(length)]
);

const container = generateArray (25);

const getProperty = function (propertyName) {
  return container[propertyName];
};

getProperty('id');
getProperty('url');
getProperty('description');
getProperty('likes');
getProperty('comments');
getProperty('avatar');
getProperty('message');


function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function generateId (min, max) {
  for (let i = 0; i < max; i++) {
    createRandomIdFromRangeGenerator (min, max);
    return container[i].id;
  }
}

generateId (1, 25);

// function createIdGenerator () {
//   let lastGeneratedId = 0;

//   return function () {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// }

// const generatePhotoId = function (id) {
//   for (let i = 0; i < id.length; i++) {
//     return id;
//   }
// };

// const generatePhotoLikes = createRandomIdFromRangeGenerator(15, 200);
