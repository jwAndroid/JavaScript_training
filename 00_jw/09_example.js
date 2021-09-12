// [1,2,3,4,5,6,7,8,10] 인 배열에서
// 인덱스가 3 일때에서만 3제곱해서 해당 배열을 출력하시오.
// const resultMapJw = (arrays) => {
//   let zeroArr = [];
//   arrays.map((array, index) => {
//     if (index === 3) {
//       zeroArr.push(array * array * array);
//     } else {
//       zeroArr.push(array * array);
//     }
//   });

//   return console.log(zeroArr);
// };

// resultMapJw([1, 2, 3, 4, 5, 6, 7, 8]);

const resultMapJw2 = (arrays) => {
  return arrays.map((array, index) => {
    return index === 3 ? array ** 3 : array ** 2;
  });
};
console.log(resultMapJw2([1, 2, 3, 4, 5, 6, 7, 8]));

/* 지용씨 코드 
const resultMap = (arrays) => {
  return arrays.map((array, index) => {
    return index === 3 ? array  3 : array  2;
  });
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(resultMap(array)); 를

===============================================================
const arrays = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arrays.map((array, index) => {
  return index === 3 ? array  3 : array  2;
});

console.log(result); 이렇게 

보고 비교해보도록 

*/
