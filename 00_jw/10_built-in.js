const mReduce = (arrays) => {
  const result = arrays.reduce((sum, number) => {
    return sum + number;
  }, 0);
  console.log(result);
};

const average = (arrays) => {
  const result = arrays.reduce((sum, number, index, arrays) => {
    if (index === arrays.length - 1) {
      return sum + number / arrays.length;
    }
    return sum + number;
  }, 0);
  console.log(result);
};

const main = () => {
  const array = [1, 2, 3, 4, 5, 6, 8, 7, 8, 9, 5, 4, 1, 2];
  //   mReduce(array);
  // const result = array.reduce((num, first) => num + first, 0); //이렇게 한줄로도 가능.
  //console.log(result);

  average(array);
};

main();
