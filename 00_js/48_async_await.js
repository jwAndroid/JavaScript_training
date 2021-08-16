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
  //순차적으로 1초 실행
  const dog = await getDog();
  console.log(dog);

  //뒤에 0.5초뒤
  const rabbit = await getRabbit();
  console.log(rabbit);

  //2초뒤에
  const turtle = await getTurtle();
  console.log(turtle);
};

process();
