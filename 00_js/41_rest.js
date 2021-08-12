const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

const { color, ...cuteSilme } = purpleCuteSlime;

console.log(color);
console.log(cuteSilme);

console.log('==================================');

const { attribute, ...slime } = cuteSilme;

console.log(attribute);
console.log(slime);

//const { attribute, ...slime } = cuteSilme; 이렇게 쓰면?? 빼는느낌으로
// const cuteSilme = { attribute, ...slime } ; 이렇게 쓰면?? 채우는 느낌으로
//rest 는 남기다 라는 뜻임.
