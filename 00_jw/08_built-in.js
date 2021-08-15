const resultMap = (arrays) => {
  let zeroArr = [];

  arrays.map((array, index) => {
    if (index === 3) {
      zeroArr.push(array * array * array);
    } else {
      zeroArr.push(array * array);
    }
  });

  return console.log(zeroArr);
};

const mapExam = (arrays) => {
  arrays.map((atribute, index) => {
    if (index === 3) return console.log(atribute);
  });
};
//이렇게 mapExam 함수 안쪽에서 맵 함수를 const로 하나더 만들지말고
//해당 함수가 바로 map으로써 출력되도록 사용하면 됨.

const superHero = ["아이언맨", "캡틴 아메리카", "토르", "닥터스트레인지"];

const main = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const arr2 = ["a", "b", "c", "d", "e"];
  // resultMap(array);
  // mapExam(arr2);
  console.log(superHero.indexOf("캡틴 아메리카")); // indexOf (값) 값이 몇번째 인덱스인지? 찾는것.
};

main();
