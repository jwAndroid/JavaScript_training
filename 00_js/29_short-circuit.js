const dog = {
  name: 'JavaScript',
};

// && :: animal 이 참이면 animal.name; 을 실행
// || name 이 참이면 뒤에꺼 실행x =  name: 'JavaScript',

// undefined (falsy 라는 값)가 들어가있으니까 뒤에꺼가 실행 x 이부분이 &&
// undefined ||  '이름이 없습니다.'; or 이니까 뒤에꺼가 실행 o 이부분이 ||

const getName = (animal) => {
  const name = animal && animal.name;
  return name || '이름이 없습니다.';
};

console.log(getName(dog));
console.log(getName());

// 앞에를 기준으로 생각.
// () && 앞에가 참이면 뒤에가 실행이 되고
// 앞에가 거짓이면 뒤에가 실행이 안되고

// || 앞에가 참이면 뒤에가 실행이 안되고
// 앞에가 거짓이면 뒤에가 실행이 되고

console.log('===========================================');
//빈문자열 빼고 truly
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); //0
console.log(1 && 'hello'); //hello
console.log(1 && 1); //1

console.log('===========================================');
console.log(true || 'hello'); // true
console.log(false || 'hello'); // hello
console.log('hello' || 'bye'); // hello
console.log(null || 'hello'); // hello
console.log(undefined || 'hello'); // hello
console.log('' || 'hello'); // hello
console.log(0 || 'hello'); // hello
console.log(1 || 'hello'); // 1
console.log(1 || 1); // 1
