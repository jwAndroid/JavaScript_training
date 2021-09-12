// const object = {
//   a: 1,
//   b: 2,
// };

// const print = (object) => {
//   console.log(object.a);
// };

// print(object);

// console.log("=============================");

// const desPrint = ({ a, b }) => {
//   console.log(a);
//   console.log(b);
// };

// desPrint(object);

// console.log("=============================");

// const name = "js";

// const animal = {
//   name: "멍멍이",
//   age: 23,
// };

// // const { name: nickname } = animal;
// // console.log(nickname);
// animal 객체의 name 을 nickname 으로 해주겠다. 이유는 위에 "js" name 이 또 있으니까

// const anmimalPirint = ({ name: nickname }) => {
//   console.log(nickname);
// };

// anmimalPirint(animal);

// console.log("=============================");

// const arr = [1, 2];
// const [one, two] = arr;

// console.log(one);
// console.log(two);

// console.log("=============================");

const deepObject = {
  state: {
    information: {
      name: 'js',
    },
  },
  value: 5,
};

const {
  state: {
    information: { name },
  },
  value,
} = deepObject;

const newObject = { name, value };

console.log(name);
console.log(value);
