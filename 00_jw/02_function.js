function hello(name) {
  console.log(`hello ${name}`);
}

hello("지웅");

console.log("=======================");

function add(a, b, c) {
  const result = (a + b + c) / 3;
  return console.log("3개의 평균값은?", { result });
}
add(3, 3, 3);

console.log("=======================");

//funtion이 아니라 *중요* 화살표함수를 쓴다.
const object = {
  name : "JW",
  age : 27
}
const arrowFuntion = (x, y) => {
  const result = x+y
  if(result == 27){
    return console.log({object})
  }
};

arrowFuntion(10,17)