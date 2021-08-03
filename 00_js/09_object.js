const cat = {
  name: '야옹이',
  age: '2',
  sound: '야옹',

  //this가 들어가면 , 화살표함수를 못쓴다.
  //출력값이 언디파인드 정의안됨이 나옴. 그래서 function 함수로 바꿔주어야함
  //

  say() {
    console.log(this.sound);
  },
  sleep: () => {
    console.log('Zzz');
  },
};

//
console.log(cat.name);
console.log(cat.age);

cat.say();
cat.sleep();

console.log('========================');

//이게 어떤거냐면 ,  name: '야옹이 에서 이름을 호출하려면 , cat.name 인데, 값이 야옹이 띄어쓰기가없음
// 근데 key with space 이쪽보면 띄어쓰기가 있기때문에
// spaceKey['key with space'] 이런식으로 참조한다는것.

const spaceKey = {
  'key with space': true,
};

console.log(spaceKey['key with space']);

console.log('========================');

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

console.log(ironMan);
console.log(captainAmerica);

console.log('========================');

//
//!!!!해당부분 많이 중요!!!!
//많이 중요하다고 하니까 머리속에 박아둘것
const originalPrint = (object) => {
  console.log(`${object.alias}(${object.name}) 역할을 맡은 배우는 ${object.actor}입니다.`);
};
// 어떤 객체가 (object) 에 들어올지는 모르지만
// 그 객체 안에는 alias name actor 가 있고 , object.alias 이런식으로 참조해서 출력하는데

// 이 방식으로 바꿔서 쓸수 있다는것.
const print = ({ name, actor, alias }) => {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`);
};

//그리고 print 라는 함수 파라미터에 (객체)를 입력받아서 위에 방식으로 출력 가능하다.
print(ironMan);
print(captainAmerica);
//!!!!해당부분 많이 중요!!!!
//

console.log('========================');
const numberObj = {
  a: 1,
  b: 2,
};

numberObj.a = 5;
numberObj.a = 10;

console.log(numberObj);

// const 에 = x 해서 한번만 초기화가능.
// 하지만 numberObj.a = 5; 의 numberObj.a 처럼 = 해서 다시 업데이트가 가능하다.
// 중괄호 안에서 : 으로 초기화 , 중괄호 밖에서 = 으로 변수 업데이트

console.log('========================');
