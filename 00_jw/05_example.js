const sumOf = (arrays) => {
  let first = 0;
  arrays.map((array) => {
    first += array;
  }, 0);
  return console.log(first);
};

//항상 리턴값이 있어야함.

const add = (x, y) => {
  return console.log(x + y);
};

const minus = (x, y) => {
  return console.log(x - y);
};

const multi = (x, y) => {
  return console.log(x * y);
};

const main = () => {
  const x = 5;
  const y = 10;
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sumOf(array);

  add(x, y);
  minus(x, y);
  multi(x, y);
};

main();
