// const cat = {
//   name: '야옹이',
//   age: 2,
//   sound: '야옹',

//   say(y) {
//     console.log(y);
//   },
//   sleep: (x) => {
//     console.log(x);
//   },
// };

// console.log(cat.name);
// console.log(cat.age);
// console.log(cat.sound);
// // 구조분해 이렇게 참조연산자는 안쓴다.

// cat.say('야옹~함수');
// cat.sleep('qasad');

// const spaceKey = {
//   //객체안에 키가 " " 띄어쓰기가 들어간 키
//   'key with space': '띄어쓰기가 들어칸 key',
// };

// console.log(spaceKey['key with space']);

// console.log('============================================');

// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨',
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카',
// };

// const jw = {
//   name: '최지웅',
//   age: 27,
//   job: 'developer',
// };

// const originalPrint = (object) => {
//   console.log(
//     `${object.alias} (${object.name}) 역할을 맡은 배우는 ${object.actor}입니다.`
//   );
// };
// // originalPrint(ironMan);
// // originalPrint 라는 화살표함수 파라메터에 객체 ironMan 이 들어가서 참조연산자로 객체의 값을 출력중.

// const print = ({ name, actor, alias }) => {
//   console.log(`${name} 은 ${actor} 를 맡았습니다. ${alias}`);
// };
// print(captainAmerica);
// *상당히 중요함* print라는 함수 매개부에  'captainAmerica' 라는 객체를 넣어서
// 함수에서 구조를 분해해서 바로 참조할수 있도록 해주는것.

const object = {
  name: '지웅',
  age: 27,
  job: 'junior devloper',
};

const print = ({ name, age, job }) => {
  console.log(`이름: ${name}\n나이: ${age}\n직업: ${job} `);
};

print(object);
