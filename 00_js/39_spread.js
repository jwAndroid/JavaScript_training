const slime = {
  name: '슬라임',
};

// const slime = {
//   name: '슬라임',
//   age: 17,
//   arrtibute: 'cute1',
// };

const cuteSilme = {
  ...slime,
  arrtibute: 'cute',
};

/*... 이 뭐냐 ...slime 은 말그대로 위 객체를 넣어 풀어서 쓴거임 , 만약에
 slime 객체에 arrtibute: 'cute 이 들어갔으면 cuteSilme는 어떻게 될까 값이 name: '슬라임',
  age: 17, arrtibute: 'cute1 ' , arrtibute: 'cute' 이렇게 있겠지? 근데 arrtibute: 'cute' 보면 두개인데 , 여기서 중요한게
  이 arrtibute를 맨 마지막꺼(arrtibute: 'cute)를 쓴다는거임 키가 같을때만  */

const purpleCuteSlime = {
  ...cuteSilme,
  color: 'purple',
};

console.log(slime);

console.log(cuteSilme);
console.log(purpleCuteSlime);
