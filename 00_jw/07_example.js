const biggerThanThree = (arrays) => {
  let addValue = 0;
  const result = arrays.map((array) => {
    if (array > 3) {
      addValue += array;
    }
  }, 0);
  return console.log(addValue);
};

const main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  biggerThanThree(arr);
};

main();
