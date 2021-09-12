const biggerThanThree = (arrays) => {
  let addValue = 0;
  const result = arrays.map((array) => {
    if (array > 3) {
      addValue += array;
    }
  }, 0);
  return console.log(addValue);
};
// map은 이렇게 쓰면안된다.
// map 이라는게 map 뒤에서 연산을해서 const result 에 값을 받아와야지

const biggerThanThree2 = (arrays) => {
  const result = arrays.reduce((sum, arr) => sum + arr, 0);
  console.log(result);
  return result;

  // let result = 0;
  // const result = arrays.map((array) => {
  //   result += array;
  // });
  // map 으로는 배열이 나오니까 안된다.
  // console.log(result);
};

// arr.push(2) === 자체는 넣은상태의 length 를 리턴함.

const main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  biggerThanThree2(arr);
};

main();
