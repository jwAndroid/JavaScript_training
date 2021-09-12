const ob1 = [
  {
    name: '지웅',
    age: 273,
  },
  {
    name: '지웅2',
    age: 271,
  },
  {
    name: '지웅3',
    age: 247,
  },
];

const ob2 = [
  {
    name: '내일',
    age: 373,
  },
  {
    name: '내일2',
    age: 371,
  },
  {
    name: '내일3',
    age: 347,
  },
];

const ob3 = [
  {
    name: '모레',
    age: 373,
  },
  {
    name: '모레2',
    age: 371,
  },
  {
    name: '모레3',
    age: 347,
  },
];

const a = [...ob1, ...ob2, ...ob3];
console.log({ a });
// 스프레드 원본배열의 속성값을 뽑아서 넣어주고 , ob2 도 똑같이 넣어줌.
