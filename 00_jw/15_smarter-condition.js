const anmimal = (animals, action) => {
  const animalSound = {
    dog: (action) => {
      console.log(action);
    },

    cat: (action) => {
      console.log(action);
    },

    parot: (action) => {
      console.log(action);
    },
  };
  const key = animalSound[animals]; // 객체의 키
  console.log(`키는? : ${key}`);

  return key ? key(action) : console.log('...?');
};

const key = 'dog';
const action = `동물은 ${key} 입니다.`;

anmimal(key, action);
