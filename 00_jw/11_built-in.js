const countBiggerThanTen = (arrays) => {
  let result = 0;
  arrays.map((array) => {
    if (array > 10) {
      result += array;
    }
  });
  return console.log(result);
};

const main = () => {
  const arrays = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];
  countBiggerThanTen(arrays);
};

main();
