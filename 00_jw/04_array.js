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

const objects2 = { name: 'jw', age: 27, sound: 'ㅋㅋ' };

objects.push(objects2);

console.log(objects);

// =================================================

const ob1 = {
  name: '지웅',
  age: 27,
};

const ob2 = {
  name: '내일',
  age: 27,
  job: 'dd',
};

Object.assign(ob1, ob2);

console.log({ ob1 });
