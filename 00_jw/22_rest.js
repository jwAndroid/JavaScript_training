const sum2 = (a, b, c, d, e, f, g) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  //   return rest.reduce((sum, number) => sum + number, 0);
};

//??????????????
console.log(sum2(1, 2, 3, 4, 5, 6, 7));

const sum = (...rest) => {
  console.log(rest);
  console.log(...rest); // ...rest 는 들어간값을 가져온다.
  //   return rest.reduce((sum, number) => sum + number, 0); // 그래서 rest [배열] 을 가지고논것.
};

console.log(sum(1, 2, 3, 4, 5, 6, 7));
