// const array = [1, 2, 3, 4, 5];
// console.log(array);

const objects = [
  {
    name: "개",
    age: 23,
    sound: "왈왈",
  },
  {
    name: "고양이",
    age: 15,
    sound: "야옹",
  },
  {
    name: "거북이",
    age: 32,
    sound: "??",
  },
  {
    name: "새",
    age: 66,
    sound: "삐약",
  },
];

const objects2 = [{ name: "개" }, { name: "고양이" }];

objects.push(objects2);

console.log(objects);
