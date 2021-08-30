// const cat = {
//   name: "야옹이",
//   age: 2,
//   sound: "야옹",

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

// cat.say("야옹~함수");
// cat.sleep("qasad");

// const spaceKey = {
//   //객체안에 키가 " " 띄어쓰기가 들어간 키
//   "key with space": "띄어쓰기가 들어칸 key",
// };

// console.log(spaceKey["key with space"]);

console.log('============================================');

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};

const jw = {
  name: '최지웅',
  age: 27,
  job: 'developer',
};

const originalPrint = (object) => {
  console.log(`${object.alias} (${object.name}) 역할을 맡은 배우는 ${object.actor}입니다.`);
};
// originalPrint(ironMan);
// originalPrint 라는 화살표함수 파라메터에 객체 ironMan 이 들어가서 참조연산자로 객체의 값을 출력중.

const print = ({ name, actor, alias }) => {
  console.log(`${name} 은 ${actor} 를 맡았습니다. ${alias}`);
};
print(captainAmerica);

const print2 = ({ name, age, job }) => {
  console.log(`이름: ${name} 나이: ${age} 직업:${job}`);
};

print2(jw);
//풀어서 참조하려고 할때 {} 꼭 써주도록
