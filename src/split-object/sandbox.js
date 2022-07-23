const exampleObject = { name: 'Ali', age: 24, city: 'Brussels' };

console.log(Object.keys(exampleObject)); // [ 'name', 'age', 'city' ]

// const splitObject = (obj = {}) => {
//   const objectsSplitted = [];
//   const keys = Object.keys(obj);
//   keys.forEach((key) => {
//     console.log(key);
//     objectsSplitted.push( {key: obj[key] });
// returns objectSplitted correctly inside the loop but not outside
//     console.log(objectsSplitted);
//   });
//   return objectsSplitted;
// };

// // doesn't know what key is outside the function
// console.log(splitObject(exampleObject)); // [ { key: 'Ali' }, { key: 24 }, { key: 'Brussels' } ]

// const splitObject = (obj = {}) => {
//   const objectSplitted = [];
//   // Object.keys creates a list/array of all the keys only
//   const keys = Object.keys(obj);
//   // goes over every item in the array of keys with key as the current item
//   keys.forEach((key) => {
//     console.log(key);
//     // entering an object with the key gives back it's value. So obj[name] will give back
//     objectSplitted.push(`{${key}: ${obj[key]}}`);
//     console.log(objectSplitted);
//   });
//   // const returnObj = objectsSplitted.join(', ');
//   // // after joining like that, it's not in an array anymore but is a string instead.
//   // // Therefore, JSON stringify and JSON.parse() it
//   // console.log(returnObj); // {name: Ali}, {age: 24}, {city: Brussels}
//   console.log(objectSplitted);
//   console.log(typeof objectSplitted); // object
//   const returnArr = JSON.parse(
//     JSON.stringify(`[${objectSplitted.join(', ')}]`),
//   );
//   console.log(returnArr.length);
//   console.log(returnArr);
//   console.log(typeof returnArr); // not an object but a string now
//   return returnArr;
// };

// with string literal it works
// console.log(splitObject(exampleObject));

const splitObject = (toSeparate = {}) => {
  const arr = [];
  if (typeof toSeparate !== 'object') {
    throw new TypeError('please pass an object as the argument');
  }
  // takes key and value one by one
  for (const [key, value] of Object.entries(toSeparate)) {
    console.log(`${key}: ${value}`); // first iteration name: 'Ali', then age: 24....
    const objectSplitted = {};
    // this populates the object with current iteration of both key and value
    objectSplitted[key] = value;
    // current object is pushed into the array
    // and then the object is cleared and repopulated with a new key value pair and pushed again
    arr.push(objectSplitted);
  }
  return arr;
};

const result = splitObject(exampleObject);
console.log(result);
console.log(typeof result);
console.log(result.length);
console.log(splitObject());
console.log({});
console.log([]);
console.log('');
console.log(splitObject(3));
console.log(splitObject('ali'));
