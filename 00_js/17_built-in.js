const todos = [
  { id: 1, text: 'HTML', isDone: true },
  { id: 2, text: 'CSS', isDone: true },
  { id: 3, text: 'JavaScript', isDone: false },
  { id: 4, text: 'React', isDone: false },
];

//findIndex는 문자그대로 배열의 인덱스를 찾는건데.
//밑의 로직은  todos 의 내장함수인 findIndex 써서 todos 배열
// 모두 끄집어내서 todo 로 집어넣어주고 얘의 id가 3인경우에만의 인덱스를 반환
const index = todos.findIndex((todo) => todo.id === 3);
console.log(index);

console.log('========================================');
const todo = todos.find((todo) => todo.id === 3);
console.log(todo);

/*.!!!!!!!!!!이거 진짜 중요함.!!!!!!!!!! filter
 이게 말그대로 배열을 필터해주는건데 , 밑의 로직 문자그대로 다 끄집어내서 
 todo.isDone 인경우만 배열로 반환해주는것
 이부분 상당히 중요함.
 이부분 삭제할떄 많이씀.
 중요한건 한줄로 끝나는게 가능함 ㅋ
*/
console.log('========================================');
const filteredTodos = todos.filter((todo) => todo.isDone);
console.log(filteredTodos);

/* */
