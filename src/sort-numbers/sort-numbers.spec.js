import { sortNumbers } from './sort-numbers';

describe('sorts numbers from smallest to largest', () => {
  for (let i = 0; i < 20; i++) {
    describe('sorts positive numbers', () => {
      it('sort positive integers', () => {
        const arr = [i + 20, i + 5, i + 7, i + 3, i + 17, i];
        const expected = [i, i + 3, i + 5, i + 7, i + 17, i + 20];
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expected);
      });
      it('sort positive decimals', () => {
        const arr = [
          i + 20.35,
          i + 5.47,
          i + 7.25,
          i + 3.12,
          i + 17.22,
          i + 20.3,
          i + 5.01,
          i + 20.354,
          i + 20.355,
        ];
        const expected = [
          i + 3.12,
          i + 5.01,
          i + 5.47,
          i + 7.25,
          i + 17.22,
          i + 20.3,
          i + 20.35,
          i + 20.354,
          i + 20.355,
        ];
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expected);
      });
    });
  }
  for (let j = 0; j > -20; j--) {
    describe('sorts negative numbers', () => {
      it('sort negative integers', () => {
        const arr = [j - 20, j - 5, j - 7, j - 3, j - 17, j];
        const expected = [j, j - 3, j - 5, j - 7, j - 17, j - 20];
        const expectedArr = [];
        // copy pasted from above and too lazy to reverse by hand
        for (const a in expected) {
          expectedArr.unshift(expected[a]);
        }
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expectedArr);
      });
      it('sort negative decimal numbers', () => {
        const arr = [
          j - 20.35,
          j - 5.47,
          j - 7.25,
          j - 3.12,
          j - 17.22,
          j - 20.3,
          j - 5.01,
          j - 20.354,
          j - 20.355,
        ];
        const expected = [
          j - 3.12,
          j - 5.01,
          j - 5.47,
          j - 7.25,
          j - 17.22,
          j - 20.3,
          j - 20.35,
          j - 20.354,
          j - 20.355,
        ];

        const expectedArr = [];
        // copy pasted from above and too lazy to reverse by hand
        for (const a in expected) {
          expectedArr.unshift(expected[a]);
        }
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expectedArr);
      });
    });
    describe('sorts mixed numbers', () => {
      it('sort both positive and negative integers', () => {
        const arr = [j + 20, j + 5, j - 7, j + 3, j - 17, j];
        const expected = [j - 17, j - 7, j, j + 3, j + 5, j + 20];
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expected);
      });
      it('sort both positive and negative decimals', () => {
        const arr = [j + 20.55, j + 20.545, j - 7, j + 0.2, j - 17, j];
        const expected = [j - 17, j - 7, j, j + 0.2, j + 20.545, j + 20.55];
        const sortedArr = sortNumbers(arr);
        expect(sortedArr).toEqual(expected);
      });
    });
  }
  describe('creates a new array without modifying the original array', () => {
    it('create a new array', () => {
      const arr = [1, 2, 3];
      const sortedArr = sortNumbers(arr);
      // reference is different but values are the same. toBe checks the reference not just value
      expect(sortedArr).not.toBe(arr);
      expect(sortedArr).toEqual(arr);
    });
    it('leave the original array unmodified', () => {
      const arr = [-1.1, 0, 2];
      const sortedArr = sortNumbers(arr);
      expect(arr).toEqual([-1.1, 0, 2]);
    });
  });
});
