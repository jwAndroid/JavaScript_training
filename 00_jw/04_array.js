// const array = [1, 2, 3, 4, 5];
// console.log(array);

const objects = [
  {
    name: '개',
    age: 23,
    sound: '왈왈',
  },
  {
    name: '고양이',
    age: 15,
    sound: '야옹',
  },
  {
    name: '거북이',
    age: 32,
    sound: '??',
  },
  {
    name: '새',
    age: 66,
    sound: '삐약',
  },
];

console.log(objects);

const objects2 = { name: 'jw', age: 27, sound: 'ㅋㅋ' };
objects.push(objects2);
console.log(objects);

console.log('===================================================');

// const ob1 = {
//   name: '지웅',
//   age: 27,
//   job: 'mm',
// };

// const ob2 = {
//   name: '내일',
//   age: 27,
//   job: 'dd',
// };

// Object.assign(ob1, ob2);
// console.log({ ob1 });

// Object.assign 부가설명

const object1 = { a: 1 };
const object2 = { b: 2, b1: 3, b2: 4 };
const object3 = { c: 5, b: 6 };

const resultAssign = Object.assign({ x: 1 }, object1, object2, object3);
console.log({ resultAssign });
// b라는 키가 object2에도 나오고 object3에도 나오거든? 근데 b가 6으로 찍힘 === 덮어씌워버린다.
// 그리고 {} 빈객체에 값을 복사해서 가지고오는것.
// 저걸 응용하려면 각 객체마다 키가 달라야만 쓸수있겠다
