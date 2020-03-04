const forEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index);
  }
};

const map = (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = callback(array[index], index);
  }
  return newArray;
};

const filter = (array, callback) => {
  const filteredArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
};

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue === undefined ? undefined : initialValue;

  for (let index = 0; index < array.length; index++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, array[index], index);
    } else {
      accumulator = array[index];
    }
  }
  return accumulator;
};

export { forEach, map, filter, reduce };
