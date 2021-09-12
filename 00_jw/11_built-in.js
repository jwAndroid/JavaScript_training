// const result = [];

const countBiggerThanTen = (arrays) => {
  const result = arrays.reduce((getSum, arraysElements, index, arrays) => {
    return arraysElements > 10 ? getSum + arraysElements : arraysElements;
  }, 0);
  console.log(result);
};
// console.log(countBiggerThanTen([1, 2, 3, 4, 5, 10, 20, 30, 40]));
// countBiggerThanTen([1, 2, 3, 4, 5, 10, 20, 30, 40]);
countBiggerThanTen([1, 2, 3, 5, 10, 20, 30]);

// const countBiggerThanTen = (arrays) => {
//   const result = arrays.reduce((getSum, arraysElements, index, arrays) => {
//     if (arraysElements > 10) {
//       return getSum + arraysElements;
//     }
//   }, 0);
//   console.log(result);
// };
// 이런경우 arraysElements > 10 에서만을 실행시켜준다고 착각할수있는데 10보다 작은경우까지 생각해아한다.
