const messages = [
  { id: 1, userId: 1, message: "안녕하세요" },
  { id: 2, userId: 2, message: "네 하이요" },
  { id: 3, userId: 1, message: "asdsadfa123sdf" },
  { id: 4, userId: 2, message: "asdsadfa123sdf" },
  { id: 5, userId: 1, message: "asdsadfa123sdf" },
];

const newMessage = { id: 7, userId: 2, message: "안녕하세요!! 답장함." };
const newMessages = [newMessage, ...messages];
// console.log(newMessages);

console.log("===============================");

const getMessage = (messageArrays) => {
  messageArrays.filter(({ id }) => id !== 4);
};

// const newX = newMessages.filter((messages) => messages.id !== 4);

const newX = newMessages.filter(({ id }) => {
  if (id !== 4 && id !== 3) {
    return newMessages;
  }
});
// return 이 있을때 필터 구현부의 {} 가 있는경우

const newY = newMessages.filter(({ id }) => id !== 4 && id !== 3);
// return 이 없을때 ... 필터 구현부의 {} 가 없는경우

// console.log(newX);
console.log(newY);
