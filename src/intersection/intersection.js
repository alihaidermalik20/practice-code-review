/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of
 * result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */
/*
const mySolution = (arrToInspect, arrOfValues) => {
  if (typeof arrToInspect !== 'object') {
    throw new TypeError('input should be array');
  }
  const filteredArray = [];
  arrToInspect.filter((value) => {
    return arrOfValues.indexOf(value) !== -1;
  });
  return filteredArray.filter((value) => arrOfValues.includes(value));
};
*/

export const mySolution2 = (arrToInspect = [], arrOfValues = []) => {
  if (typeof arrToInspect !== 'object') {
    throw new TypeError('input should be array');
  }
  const filteredArray = [];
  arrToInspect.forEach((value) => {
    if (!filteredArray.includes(value)) {
      filteredArray.push(value);
    }
  });
  return filteredArray.filter((value) => arrOfValues.includes(value));
};
