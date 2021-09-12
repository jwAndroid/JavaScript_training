const sum = (...rest) => {
  console.log(`rest: ${rest}`);
  console.log(...rest);
  return rest.reduce((sum, number) => sum + number, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// 1, 2, 3, 4, 5, 6, 7 배열이 아니라 인자가 들어간건데 이게 대체 어떻게 들어갈수있을까
// rest.reduce((sum, number) => sum + number, 0); 이부분보면 rest. 이 보이지??
// rest 는 무언가의 배열이라는건데 이건 당연히 어딘가에서 받아야겠지?
// 1, 2, 3, 4, 5, 6, 7 얘를 ...rest가 배열이 아닌애를 rest라는 배열로 만들어주는건데
// 이부분은 차라리 암기해놓는게 낫다.
// 이 패키지에서 파일하나하나 중요한부분을 체크해뒀는데 그부분 집중적으로 주말에 보고
// 중요한부분은 하나하나 문제같은거 스스로 만들어서 해보면 알게될꺼임.
//
