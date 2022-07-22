import { mySolution } from './difference.js';

for (const solution of [mySolution]) {
  describe(`${solution.name}: Repeated values are not duplicated in the return value, and the order of
  result values are determined by the first array`, () => {
    describe('it work for datatypes and if value repeated it should be returned only one time', () => {
      it('[2, 1] -- [2, 3] --> [1]', () => {
        expect(solution([2, 1], [2, 3])).toEqual([1]);
      });
      it('[1, 2, 1] -- [2, 3] --> [1]', () => {
        expect(solution([1, 2, 1], [2, 3])).toEqual([1]);
      });
      it('[1, 2, 1, 4] -- [2, 3] --> [1, 4]', () => {
        expect(solution([1, 2, 1, 4], [2, 3])).toEqual([1, 4]);
      });
      it('[a, b, a, c] -- [b, d] --> [a, c]', () => {
        expect(solution(['a', 'b', 'a', 'c'], ['b', 'd'])).toEqual(['a', 'c']);
      });
      it('[true, false, true] -- [true] --> [false]', () => {
        expect(solution([true, false, true], [true])).toEqual([false]);
      });
      it('[null, NaN, NaN] -- [NaN] --> [null]', () => {
        expect(solution([null, NaN, NaN], [NaN])).toEqual([null]);
      });
      describe('if we will not pass any arguments it should return empty array', () => {
        it('if all values are same wi will return empty array', () => {
          expect(solution([1, 2, 3], [1, 2, 3])).toEqual([]);
        });
        it('if no arguments should return empty array', () => {
          expect(solution([], [])).toEqual([]);
        });
        it('default parameters should return empty array', () => {
          expect(solution()).toEqual([]);
        });
      });
      describe('if we pass not array it will throw error', () => {
        it('(1, 2, 3) --> Error is not array', () => {
          expect(() => solution(1, 2, 3)).toThrowError('array is not array');
        });
      });
    });
  });
}
