const deepObject = {
  state: {
    information: {
      name: 'JavaScript',
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

//이것도 상당히 중요함.
//그니까 deepObject 를 value 라는것과 , state.information.name 을 라는것을
//const newObject = { name, value }; 으로 풀어서 쓴다는것.

console.log(newObject);
