import { splitObject } from './split-object.js';

describe('object with several keys and string/ number values', () => {
  const obj1 = { name: 'Ali', age: 24, city: 'Brussels' };
  it('leaves the argument object unmodified', () => {
    splitObject(obj1);
    expect(obj1).toStrictEqual({ name: 'Ali', age: 24, city: 'Brussels' });
  });
  it('return type object', () => {
    const returnedArr = splitObject(obj1);
    expect(typeof returnedArr).toEqual('object');
  });
  it('return correct length of array', () => {
    expect(splitObject(obj1).length).toEqual(3);
  });
});
describe('not an object is passed as argument', () => {
  it('throw a TypeError if string passed', () => {
    expect(() => {
      splitObject('ali');
    }).toThrow(new TypeError('argument should be of type object'));
  });
  it('throws a typeError even if an empty string is passed', () => {
    expect(() => {
      splitObject('').toThrow(
        new TypeError('argument should be of type object'),
      );
    });
  });
  it('throws an error if a number is passed as argument', () => {
    expect(() => {
      splitObject('5');
    }).toThrow(new TypeError('argument should be of type object'));
  });
});
describe('empty objects', () => {
  it('returns empty object if nothing is provided as argument', () => {
    expect(splitObject()).toEqual([]);
  });
  it('returns empty object if empty object or array provided', () => {
    expect(splitObject([])).toEqual([]);
  });
});
