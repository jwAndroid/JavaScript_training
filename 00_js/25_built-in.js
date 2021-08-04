const numbers = [1, 2, 3, 4, 5];
let sum1 = 0;

numbers.forEach((number) => (sum1 += number));
console.log(sum1);

console.log('=====================================');
//리듀스의 첫번쨰 인자로는 결과값 변수임 , 두번쨰 인자는 루프 돌때 하나씩 나오는거임
// 섬이랑 넘버랑 더해서 맨 마지막 ,0 이거는 그냥 인자 sum에 들어가는 초기값임
// 그니까 (섬,넘버) 파라메터에 있는거임 , 넘버에 배열 모두 들어가 , 파라메터에 섬은 결과값을 넣어줘 , 연산은 sum + number 로 하고!
// 그러고 sum2 반환하는거
const sum2 = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum2);

console.log('=====================================');

//sum , number 는 위에랑 똑같음 , sum 은 초기값 0 이고 , number는 모두 끄집어내서 하나하나 들어가는 값임
// 그러면 index 랑 array 는 뭐냐? 보면 index는 위 배열의 말그대로 index가 되는거고 array 는 마찬가지로
// 위 배열을 가리키는 것임.
// array 는 그대로 가는것 그냥 배열 넣어준거임 변하는게 아니고

const average = numbers.reduce((sum, number, index, array) => {
  if (index === array.length - 1) {
    return (sum + number) / array.length;
  }

  return sum + number;
}, 0);

console.log(average);
