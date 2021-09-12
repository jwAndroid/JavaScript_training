const cat = {
  name: '야옹이',
  age: 145,
  sound: '야옹',
};

// console.log(Object.entries(cat));
// console.log(Object.keys(cat));
// console.log(Object.values(cat));

const catObjectsKey = Object.keys(cat);
// "cat" 오브젝트 키만 추출.
console.log({ catObjectsKey });
const plusKey = 'key';

const keyFilter = catObjectsKey.filter((key) => {
  if (key === 'age') {
    catObjectsKey.push(plusKey);
    console.log({ catObjectsKey });
  }
});
