/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */

export const splitObject = (toSeparate = {}) => {
  const arr = [];
  if (typeof toSeparate !== 'object') {
    throw new TypeError('argument should be of type object');
  }
  // takes key and value one by one
  for (const [key, value] of Object.entries(toSeparate)) {
    // console.log(`${key}: ${value}`); // first iteration name: 'Ali', then age: 24....
    const currentObj = {};
    // this populates the object with current iteration of both key and value
    currentObj[key] = value;
    // current object is pushed into the array
    // and then the object is cleared and repopulated with a new key value pair and pushed again
    arr.push(currentObj);
  }
  return arr;
};
