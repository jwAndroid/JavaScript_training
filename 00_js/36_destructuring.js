const animal = {
  name: '멍멍이',
  type: '개',
};

const { name: nickname } = animal;
//만약에 여기서 name1 이면 ? 안된다. animal.name1 은 찾을수 없으니까.

console.log(nickname);

// const name = "js"

// const animal = {
//   name: '멍멍이',
//   type: '개',
// };

// const { name } = animal;
// const { name : nickname } = animal;
//여기서 애니멀.name 을 풀어서 쓴건데 , 위에 const 로 name 이란애를 "js" 라고 선언해놓고 밑에서 또 name을 부르니까
// 당연히 에러가 남 . 그래서 const { name: nickname } = animal; 이런식으로 nickname 을 붙여서 특정지어준다.

//console.log(nickname);
