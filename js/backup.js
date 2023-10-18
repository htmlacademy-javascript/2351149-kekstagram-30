// function createRandomIdFromRangeGenerator (a, b) {
//   const previousValues = [];

//   return function () {
//     let currentValue = getRandomInteger(a, b);
//     if (previousValues.length >= (a - b + 1)) {
//       return null;
//     }
//     while (previousValues.includes(currentValue)) {
//       currentValue = getRandomInteger(a, b);
//     }
//     previousValues.push(currentValue);
//     return currentValue;
//   };
// }
