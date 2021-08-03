const sumOf = (x) => {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }
  console.log(result);
  return result;
};

console.log(sumOf([1, 2, 3, 4, 5]));
