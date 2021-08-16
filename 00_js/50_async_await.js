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
  const result = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  //얘는 비동기중 가장 빠른애만 뽑아옴.
  console.log({ result });
};

process();
