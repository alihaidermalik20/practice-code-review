import { mySolution2 } from './intersection.js';

for (const solution of [mySolution2]) {
  describe(`${solution.name}: Repeated values are duplicated in the return value, and the order of
    result values are determined by the first array`, () => {
    describe('return duplicated elements of arrays with different datatypes', () => {
      it('[2, 1] -- [2, 3] --> [2]', () => {
        expect(solution([2, 1], [2, 3])).toEqual([2]);
      });
      it('[1, 2, 1] -- [2, 3] --> [2]', () => {
        expect(solution([1, 2, 1], [2, 3])).toEqual([2]);
      });
      describe('repeated values should not be returned in new array ', () => {
        it('[1, 2, 1] -- [1, 2, 3] --> [1, 2]', () => {
          expect(solution([1, 2, 1], [1, 2, 3])).toEqual([1, 2]);
        });
        it('[a, b, a, c] -- [a, b, d] --> [a, b]', () => {
          expect(solution(['a', 'b', 'a', 'c'], ['a', 'b', 'd'])).toEqual([
            'a',
            'b',
          ]);
        });
        it('[true, false, true] -- [true] --> [true]', () => {
          expect(solution([true, false, true], [true])).toEqual([true]);
        });
      });
      describe('function do not have side effects', () => {
        it('should return new array', () => {
          const arr = [1, 2, 1];
          const values = [2, 3];
          const filteredArray = solution(arr, values);
          expect(filteredArray === arr).toEqual(false);
        });
        it('original array should not be modified', () => {
          const arr = [1, 2, 1];
          const values = [2, 3];
          solution(arr, values);
          expect(arr).toEqual([1, 2, 1]);
        });
      });
      describe('if we do not have arguments we should return empty array', () => {
        it('[]-- [] --> []', () => {
          expect(solution([], [])).toEqual([]);
        });
        it('default parameters should return empty array', () => {
          expect(solution()).toEqual([]);
        });
      });
      describe('if we do not have duplicated values it will return empty array ', () => {
        it('[1, 2, 3]-- [4, 5, 6] --> []', () => {
          expect(solution([1, 2, 3], [4, 5, 6])).toEqual([]);
        });
      });
      describe('if input is not array it should throw an error', () => {
        it('1, 2, 1 -- [1, 2, 3] -->Error', () => {
          expect(() => solution(1, 2, 1, [1, 2, 3])).toThrowError();
        });
      });
    });
  });
}
