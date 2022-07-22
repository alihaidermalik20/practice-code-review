/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of
 result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */

export const mySolution = (arrToInspect = [], arrOfValues = []) => {
  if (typeof arrToInspect !== 'object') {
    throw new Error('array is not array');
  }
  // check if array is array, if not than it will throw an error
  const filteredArray = arrToInspect.filter(
    (val) => !arrOfValues.includes(val),
  );
  // create new array to store returned value and avoid side effects
  for (let i = 0; i < filteredArray.length; i++) {
    if (i !== filteredArray.lastIndexOf(filteredArray[i])) {
      filteredArray.splice(i, 1);
    }
  }
  return filteredArray;
};
