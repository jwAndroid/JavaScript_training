const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map((number) => {
  return number + 1;
}, 0);
console.log(arr2);

console.log('===========================================');

// const a = (numbers) => {
//   return numbers.filter((number) => number > 10).length;
// };

// console.log(a([1, 2, 3, 5, 10, 20, 30, 40, 50]));
console.log('===========================================');

const users = [
  {
    id: 11,
    name: '지웅',
    age: 23,
    group: 'A반',
  },
  {
    id: 21,
    name: '호성',
    age: 29,
    group: 'D반',
  },
  {
    id: 34,
    name: '지용',
    age: 31,
    group: 'class반',
  },
  {
    id: 11,
    name: '소라',
    age: 27,
    group: 'B반',
  },
];

const newUsers = { id: 13, name: '거북이', age: 3, group: 'A반' };
const updatedUsers = [...users, newUsers];
console.log(updatedUsers);

const xczxc = updatedUsers.map(({ id, name }) => id + name);

console.log(xczxc);

const res = users.find((it) => {
  return it.group === 'B반';
});

console.log(res);
