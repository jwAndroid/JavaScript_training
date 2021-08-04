const array = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = [];

for (let i = 0; i < array.length; i++) {
  result1.push(array[i] * array[i]);
}
console.log(result1);
console.log('=====================================');
/*
forEach 와 map 이 다른점?
전자는 result2 라는 배열변수를 먼저 미리만들고
거기다 push 를 해주어야하는데

map은 "배열을 만들필요도 없이"  "map쪽에서 모두 계산"되어져서
result3 으로 결과값이 배열이다.

map은 정말 중요하기떄문에 꼭 해당로직 하늘이 두쪽나도 암기해준다!!
*/
const result2 = [];
array.forEach((number) => {
  return result2.push(number * number);
});
console.log(result2);

/*map 은 정말 중요함. 포 이치 , 포문 다 버리고 이것만 생각 */
console.log('=====================================');
const result3 = array.map((number, index, array) => {
  console.log(index);
  console.log(array);
  return number * number;
});
console.log(result3);
