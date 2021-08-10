const object = { a: 1, b: 2 };

const print = ({ a, b = 2 }) => {
  console.log(a);
  console.log(b);
};
print(object);

//원래는 이방식임.
// const print = (object) => {
//   console.log(object.a);
//   console.log(object.b);
// };
// print(object);

// 오브젝트를 풀어버리겠다. ==> 해서 object를 이렇게 풀어서 대신쓴거임. {a , b}
// 왜 풀어썻느냐? object.a 로 참조하는게 아니고 , 이렇게 풀어쓰면 바로 a 로 참조가 가능.
// a, b = 2 그럼 풀어썻으면 이건 무엇인지? .. {a , b} 있는데 만약 b 가 없으면 기본값으로 b = 2 를 줘라. 라는 말임.
