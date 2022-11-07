const numbers = [1, 2, 3, 4, 5];

// 배열에서도 마찬가지로 불변성을 유지하면서 새로운 배열을 만들어줘야한다.
// 직접 수정하는건 안된다.

const [o, t] = numbers;
console.log(t);

const newNum = [...numbers, 6];
console.log(newNum);
