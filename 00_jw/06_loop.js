const cat = {
  name: "야옹이",
  age: 145,
  sound: "야옹",
};

// console.log(Object.entries(cat));
// console.log(Object.keys(cat));
// console.log(Object.values(cat));

const catObjectsKey = Object.keys(cat);

const keyFilter = catObjectsKey.filter((key) => {
  if (key === "age") return key;
});

console.log(keyFilter);
