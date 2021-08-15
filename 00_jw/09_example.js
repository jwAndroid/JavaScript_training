// [1,2,3,4,5,6,7,8,10] 인 배열에서
// 인덱스가 3 일때에서만 3제곱해서 해당 배열을 출력하시오.
const resultMap = (arrays) => {
  let zeroArr = [];

  arrays.map((array, index) => {
    if (index === 3) {
      zeroArr.push(array * array * array);
    } else {
      zeroArr.push(array * array);
    }
  });

  return console.log(zeroArr);
};

const main = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  resultMap(array);
};

main();
