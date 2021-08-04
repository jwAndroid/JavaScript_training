//빌트 인
const superHero = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superHero.length; i++) {
  console.log(superHero[i]);
}

console.log('===================================');

superHero.forEach((hero) => {
  return console.log(hero);
});
