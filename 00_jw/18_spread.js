const ob1 = {
  name: "슬라임",
  age: 23,
};

const ob2 = {
  ...ob1,
  type: "몬스터",
};

const ob3 = [
  {
    ...ob2,
    color: "red",
  },
  {
    ...ob2,
    color: "blue2",
  },
  {
    ...ob2,
    color: "red3",
  },
  {
    ...ob2,
    color: "red",
  },
];
