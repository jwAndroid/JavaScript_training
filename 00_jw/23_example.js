const person = {
  name: '지웅',
  age: 1,
};

const getAll = ({ name, age }) => {
  console.log(name);
  console.log(age ? age : '알 수 없음');
};

// getAll(person);

const onClick = () =>
  useCallback(() => {
    return console.log(person);
  }, []);

onClick();
