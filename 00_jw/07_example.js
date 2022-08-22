const biggerThanThree = (arrays) => {
  let addValue = 0;
  const result = arrays.map((array) => {
    if (array > 3) {
      addValue += array;
    }
  }, 0);
  return console.log(addValue);
};

const biggerThanThree2 = (arrays) => {
  const result = arrays.reduce((sum, arr) => sum + arr, 0);
  console.log(result);
  return result;
};

// arr.push(2) === 자체는 넣은상태의 length 를 리턴함.

const main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  biggerThanThree2(arr);
};

main();
