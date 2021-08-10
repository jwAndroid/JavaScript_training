const object = { a: 1, b: 2 };
const { a, b = 2 } = object;

console.log(a);
console.log(b);

//원래는 이렇게 썻어야 했는데 es6 이후로 위에껄로 변함. 이부분 상당히 중요함.
// const a = object.a;
// const b = object.b;
// console.log(a);
// console.log(b);

//이거 진짜 중요하다고 함
//이거 모르면 개발 못함 맵,필터 급으로 중요함.
