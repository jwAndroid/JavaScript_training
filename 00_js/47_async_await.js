//여기서부터 중요하다!!

// 내가 배우는게 es6가아니고 이후버전이다.
// 어싱크 어웨이트는 es8 에 추가된것.

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      //reject(new Error);
    }, ms);
  });
};

//첫번째. await를 쓰려면 async 를 포함한 식을 써준다.밑에처럼
//async 는 무조건 이자리에 있어야 한다. 함수명 = async () => 이렇게
//두번째. await이 있으면 무조건 트라이캐치로 감싼다. 비동기를 써준다면 거의 무조건 예외처리를 해준다.
//세번째. await 은 기다린다 라느말인데 그니까 1초 기다렸다가 console.log('end'); 를 해준다는말
//

const process = async () => {
  console.log('Start');

  try {
    await sleep(1000);

    console.log('end');
  } catch (error) {
    console.log(error);
  }
};

process();
