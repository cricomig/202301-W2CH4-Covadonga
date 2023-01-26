export const length = (array) => {
  let counter = 0;

  while (array[counter] !== undefined) {
    counter += 1;
  }

  return counter;
};

export const push = (array, element) => {
  const newLength = length(array);
  array[newLength] = element;

  return newLength + 1;
};

export const pop = (array) => {
  const newLength = length(array);

  if (newLength === 0) return undefined;

  const deleteElement = array[newLength - 1];

  array.length = newLength - 1;

  return deleteElement;
};

export const shift = (array) => {
  const newLength = length(array);

  if (newLength === 0) return undefined;

  const deleteElement = array[0];

  for (let i = 1; i <= newLength - 1; i++) {
    array[i - 1] = array[i];
  }

  array.length = newLength - 1;

  return deleteElement;
};

export const unshift = (array, element) => {
  let newLength = length(array);

  if (newLength === 0) return undefined;

  for (let i = newLength; i >= 1; i--) {
    array[i] = array[i - 1];
  }

  array[0] = element;

  newLength += 1;

  return newLength;
};

export const some = (array, condition) => {
  const newLength = length(array);

  if (newLength === 0) return undefined;

  let result = false;

  for (let i = 0; i < newLength; i++) {
    if (array[i] === condition) {
      result = true;
    }
  }

  return result;
};

export const every = (array, condition) => {
  const newLength = length(array);

  if (newLength === 0) return undefined;

  let counter = 0;
  let result;

  for (let i = 0; i < newLength; i++) {
    if (array[i] !== condition) {
      counter++;
    }

    if (counter === 0) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
};
