// const ob1 = {
//   name: '슬라임',
//   age: 23,
// };

// const ob2 = {
//   ...ob1,
//   type: '몬스터',
// };

// const ob3 = [
//   {
//     ...ob2,
//     color: 'red',
//   },
//   {
//     ...ob2,
//     color: 'blue2',
//   },
//   {
//     ...ob2,
//     color: 'red3',
//   },
//   {
//     ...ob2,
//     color: 'red',
//   },
// ];

const array1 = [
  { a: 1, b: 2, c: 3 },
  { a: 23, b: 45, c: 12 },
  { a: 321, b: 152, c: 33 },
];

const array2 = [
  { a: 21, b: 21, c: 23 },
  { a: 213, b: 4245, c: 11232 },
  { a: 3241, b: 152132, c: 31233 },
];

const newArray = [...array1, ...array2];
console.log({ newArray });
console.log(...array1);
