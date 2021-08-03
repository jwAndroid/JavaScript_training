const biggerThanThree = (x) => {
  const result = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] > 3) {
      result.push(x[i]);
    }
  }
  return result;
};

console.log(biggerThanThree([1, 2, 3, 4, 5, 6, 7]));
