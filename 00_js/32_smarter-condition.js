const getSound = (animal) => {
  const sound = {
    개: '멍멍',
    고양이: '야옹',
    참새: '짹짹',
    비둘기: '구구 구 구 ',
  };

  return sound[animal] || '...?';
};

console.log(getSound('개'));
console.log(getSound('노트북'));

//화살표함수는 입력값이 하나만 있을때 ()가 없어도된다.
