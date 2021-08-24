//var 는 쓰면 안된다.
//최신 js 문법에서 var는 거의 금지

const a = 1;
if (a + 1 === 2) {
  console.log("a+1 은 2 와 같다");
}

const x = 1;
if (true) {
  const x = 3;
  console.log("const if 안의값" + x);
}
console.log("const if 밖의값 " + x);

// var y = 1;
// if (true) {
//   y = 5;
//   console.log("var if 안의값" + y);
// }
// console.log("var if 밖의값" + y);

let c = 1;
if (true) {
  let c = 5;
  c = 8;
  console.log("let if 안의값" + c);
}
console.log("let if 밖의값" + c);
