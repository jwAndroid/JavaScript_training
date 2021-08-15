function hello(name) {
  console.log(`hello ${name}`);
}

hello("지웅");

console.log("=======================");

function add(a, b, c) {
  const str = "3개의 평균값은?";
  const result = (a + b + c) / 3;
  return console.log(str + " " + result);
}
add(3, 3, 3);
console.log("=======================");

const add3 = (x, y) => x + y;
console.log(add3(10, 3));
