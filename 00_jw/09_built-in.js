const todos = [
  {
    id: 1,
    text: "html",
    isDone: true,
  },
  {
    id: 2,
    text: "css",
    isDone: false,
  },
  {
    id: 3,
    text: "js",
    isDone: true,
  },
];

const findIndex = todos.findIndex((todo) => {
  if (todo.id === 2) {
    console.log(todo);
    //객체출력.
  }
});

console.log("===========================================");

const find = todos.find((todo) => {
  if (todo.id === 3) {
    console.log(todo);
  }
});
console.log("===========================================");

const isTodo = todos.filter((todo) => {
  if (!todo.isDone) {
    console.log(todo);
  }
});

console.log("===========================================");
const numbers = [10, 20, 30, 40];

const spliceNumbers = numbers.splice(2, 1);

const sliceNumbers = numbers.slice(0, 2); //0부터 2개 뽑아내라

const shiftNumber = numbers.shift(); //앞에 하나 뽑아냄.

const popNumber = numbers.pop(); //마지막 꺼냄.

const unshiftNumber = numbers.unshift(5); //맨앞에 5를 추가.

console.log(arr1.concat(arr2)); //둘이 합침.

console.log(numbers.join()); //배열을 스트링으로 반환 [1,2,3,] => 1,2,3 이런식으로
