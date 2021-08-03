for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('==================================');

const names = ['개', '고양이', '거북이'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('==================================');
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log('==================================');
// 10~50 까지 다 뽑아서 number 에 넣고 출력
// 포 이치랑 똑같은 문법.
const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
console.log('==================================');
const cat = {
  name: '고양이',
  sound: '야옹',
  age: 3,
};
console.log(Object.entries(cat)); //키 : 벨류 로 배열형태로 뽑힘. cat이
console.log(Object.keys(cat)); //키만 배열로 뽑임.
console.log(Object.values(cat)); //값만 배열로 뽑임.

console.log('==================================');
for (let key in cat) {
  console.log(`${key}: ${cat[key]}`);
}
// 키 : 벨류에서 cat에 있는 키만 모조리 가져와서 key 변수안에 넣음.

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;

  console.log(i);

  if (i === 5) break;
}
