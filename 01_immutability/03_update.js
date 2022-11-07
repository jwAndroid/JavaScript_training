const numbers = [1, 2, 3, 4, 5, 6, 7];
const doubled = numbers.map((number) => number * 2);

console.log(doubled);

// 4 만 곱하기 2 를 하려면?
const nexts = numbers.map((number) => (number === 4 ? number * 2 : number));
console.log(nexts);

const objs = [
  { id: 0, nickname: 'jw1' },
  { id: 1, nickname: 'jw2' },
  { id: 2, nickname: 'jw3' },
];

// 아이디가 1 인 닉네임을 불변성을 지키면서 업데이트 시켜준다.
const nextObj = objs.map((obj) =>
  obj.id === 1 ? { ...obj, nickname: '안녕하세요' } : obj
);
console.log(nextObj);
