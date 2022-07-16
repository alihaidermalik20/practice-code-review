import { deepFlat } from './deep-flat.js';

describe('deepFlat converts a nested array into a single array with no nesting', () => {
  describe('depth of 1', () => {
    it('one brackets', () => {
      const expected = [5, 2, 0, 3, 1];
      const received = deepFlat([5, [2, 0, 3], 1], 1);
      expect(received).toEqual(expected);
    });
    it('two brackets', () => {
      const expected = [6, 7, 0, 2, 9];
      const received = deepFlat([6, [7, 0], [2, 9]], 1);
      expect(received).toEqual(expected);
    });
    it('three brackets', () => {
      const expected = [3, 1, 9, 6, 4, 0];
      const received = deepFlat(
        [
          [3, 1],
          [9, 6],
          [4, 0],
        ],
        1,
      );
      expect(received).toEqual(expected);
    });
  });
  describe('depth of 2', () => {
    it('two brackets', () => {
      const expected = [5, 3, 2, 1, 0];
      const received = deepFlat([5, [3, [2, 1], 0]], 2);
      expect(received).toEqual(expected);
    });
    it('three brackets', () => {
      const expected = [8, 4, 8, 5, 1, 4, 0];
      const received = deepFlat([8, [4, [8], 5], [1, 4], 0], 2);
      expect(received).toEqual(expected);
    });
  });

  describe('depth of 3', () => {
    it('three brackets', () => {
      const expected = [5, 2, 7, 9, 1, 8, 6, 0];
      const received = deepFlat([5, [2, [7, [9]], 1], 8, 6, 0], 3);
      expect(received).toEqual(expected);
    });
    it('four brackets', () => {
      const expected = [6, 7, 2, 9, 0, 1, 6, 3];
      const received = deepFlat([6, [7, [2, [9, 0], 1], 6], 3], 3);
      expect(received).toEqual(expected);
    });
  });

  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = deepFlat(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [9, 2, 7];
      deepFlat(arg);
      expect(arg).toEqual([9, 2, 7]);
    });
  });
});
