const person = {
  name: 'JavaScript',
};

const print = (person) => {
  if (!person) {
    return;
  }

  console.log(person.name);
};

//객체가 있냐없냐 이부분 많이 쓴다고 함.
// print(person); // 사람 객체가 있으니까 콘솔로그를 찍어주고
print(); // === print(undefined);
// 언디파인드가 들어가서 (!undefined) 가 되니까 == falsy
//라는 값이고 그래서 not 이면 true가 되고 , 그래서if문이 참이니까 리턴쪽으로가서
// if문을 나가버림 --> console.log(person.name); 이 찍히겠지?

// print(null);

// console.log('===============================');

// //falsy
// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!0); // true
// console.log(!''); // true
// console.log(!NaN); // NaN (Not a Number) true

// console.log('===============================');

// console.log(!!undefined); // flase // (!null); == true 의 반대니까 false 가 나옴.
// console.log(!!null); // false
// console.log(!!0); // false
// console.log(!!''); // fasle
// console.log(!!NaN); // false
