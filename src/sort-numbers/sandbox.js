const arr1 = [1, 3, 4, 2];

const arr1copy = arr1.map((x) => x);
console.log(arr1copy);
console.log(arr1copy === arr1);

// sort has a compare function that takes two numbers and compares them. if a is greater than b,
// it returns a positive number and sorts the a after b for ascending order.
// if a negative number because b is greater than a, a is placed before.
// for equal, order isn't changed. for further details, consult MDN docs

// for first iteration, a: 3 and b: 1 - r: 2
// a: 4, b: 3 - r: 1
// a: 2, b: 4 - r: -2
// a:2, b: 3 - r: -1
// a:2, b: 1 - r: 1
arr1copy.sort((a, b) => a - b);
console.log(arr1copy);

// so it compares one number with the number next to it and if it's smaller,
// leaves it there otherwise swaps them and then compares the swapped one with the next
// swaps again if swapped one is larger. compares again with the next one until it has put
// the largest one to the end. Keeps one putting largest ones to the end
// by comparing it with the one next to it?

const arrTest = [4, 3, 2, 1];
const arrCurr = arrTest.sort((a, b) => a - b);

const arrTest2 = [4, 2, 1, 5, 7, 12];
arrTest2.sort(function (a, b) {
  console.log(arrTest2);
  return a - b;
});
console.log(arrTest2);

// tried understanding how it selects a and b but couldn't figure it out
// arrTest2 selection of a and b seemed random and only final result is printed

const i = 1;
const expected = [i, i - 3, i - 5, i - 7, i - 17, i - 20];
const expectedArr = [];
for (const a in expected) {
  expectedArr.unshift(expected[a]);
}
console.log(expectedArr);
