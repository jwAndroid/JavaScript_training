const numbers = [1, 2, 3, 4, 5, 6, 7];

const filtered = numbers.filter((number) => number > 2);
console.log(filtered);

const removed = numbers.filter((number) => number !== 3);
console.log(removed);

const objs = [
  { id: 0, nickname: 'jw1' },
  { id: 1, nickname: 'jw2' },
  { id: 2, nickname: 'jw3' },
];

const newObjs = objs.filter((obj) => obj.id !== 1);
console.log(newObjs);

console.log(objs === [...objs]); // false
// [...objs] 로써 새로운 배열을 만들어준다.

const objs2 = [
  { id: 0, num: '1' },
  { id: 1, num: '2' },
  { id: 2, num: '3' },
];

const index = objs2.findIndex((objs) => objs.id === 2);
console.log(index); //2

const next = [...objs2].splice(index, 1);
// [...objs] 로써 새로운 배열을 만들어준다.

// 항목 삭제시 filter, findIndex + splice 를 사용한다.
