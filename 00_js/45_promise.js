const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(new Error());
    // 셋 타임아웃 구현부를 1초뒤에 실행시켜라.
  }, 1000);
});

myPromise
  .then(console.log) // resolve(1); 에서 입력값이 하나일때는 이렇게 삭제가능.
  .catch(console.error)
  .finally(() => {
    console.log('finally 실행.');
  });

// myPromise
//   .then((number) => {
//     console.log(number);
//   })
//   .catch(console.error)
//   .finally(() => {
//     console.log('finally 실행.');
//   });

// new 라는 연산자는 인스턴스 생성할때 쓰는거지? Promise new 를 붙여서 쓴다고 외우면 됨.
// resolve 는 then 에서 연산 , catch 는 Error 연산.
//
