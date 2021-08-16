const increaseAndPrint = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;

      if (value === 5) {
        const error = new Error();
        error.name = 'valueIsFiveError';

        return reject(error);
      }

      console.log(value);

      return resolve(value);
    }, 1000);
  });
};

//리턴이 프로미스 객체면 밑에처럼 체이닝이 된다.
// 예를들어서
// 밑에는 다른 메모리에서 비동기식으로 돌아간다는것.
increaseAndPrint(0)
  .then((number) => {
    return increaseAndPrint(number);
  })
  .then((number) => {
    return increaseAndPrint(number);
  })
  .then((number) => {
    return increaseAndPrint(number);
  })
  .then((number) => {
    return increaseAndPrint(number);
  })
  .catch((error) => {
    console.log(error);
  });

// 개념이랑 다른말인데
// {} 가 있으면 return 을 안에 반드시 적어준다.
// {} 가없고 한줄이면 return을 생략해준다. 여러줄일때도 상관이 없다. 출력이 바로나온다 {} 뺴도 된다.
