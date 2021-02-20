export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomValue = (min, arr) => {
  let max = arr;
  return Array.isArray(arr) ?
    arr[Math.floor(Math.random() * max.length)] :
    Math.floor(min + Math.random() * (max + 1 - min));
};

export const shuffleArray = (arr) => {
  let j;
  let k;
  for (let i = arr.length - 1; i > 0; i--) {
    j = getRandomValue(1, i);
    k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
  return arr;
};
