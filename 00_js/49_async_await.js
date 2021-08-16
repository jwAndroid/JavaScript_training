const sleep = (ms) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
      // reject(new Error());
    }, ms)
  );
};

const getDog = async () => {
  await sleep(1000);

  return '개';
};

const getRabbit = async () => {
  await sleep(500);

  return '토끼';
};

const getTurtle = async () => {
  await sleep(2000);

  return '거북이';
};

const process = async () => {
  const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  //동시에 실행해서 가장 오래끝나는 애를 기다린다. 거북이가 2초니까 전에 0.5초든 1초든 2초까지 기다리다가 한번에 출력 이게 all 이다.
  //중간에 에러가 있다면 그 중간에서 끝남.
  console.log({ dog, rabbit, turtle });
};

process();
// 명칭을 쓸때 LabVIEW .. 이부분 기억 콘솔로그 찍을때도 이런식으로 **

const a = {
  name: 'a',
  age: 'b',
};
console.log(a);
console.log(`a : ${a}`);
console.log({ a }); // 이런식으로 신경써서 찍을것
