const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

const { color, ...cuteSilme } = purpleCuteSlime;
// purpleCuteSlime 객체를 color 를 뺀 나머지를 다시 풀어서 넣겠다. 그리고 cuteSilme 이란애가  name: "슬라임",  attribute: "cute",
// 두개를 가지고 재탄생 한거.

// 컬러 따로 ...(무언가)나머지 따로

// console.log(color);
// console.log(cuteSilme);
// console.log(purpleCuteSlime);

const { attribute, ...t } = cuteSilme;
console.log(t);
// 한번 더 들어간거. attribute 뺀 나머지

const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, ...x] = numbers;

console.log(one); // 1
console.log(x); // 2~
