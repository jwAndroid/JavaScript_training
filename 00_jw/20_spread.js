const messages = [
  { id: 1, userId: 1, message: '안녕하세요' },
  { id: 2, userId: 2, message: '네 하이요' },
  { id: 3, userId: 1, message: '어디 여행가시나요?' },
  { id: 4, userId: 2, message: '제주도 갑니다!' },
  { id: 5, userId: 1, message: '같이 가실까요??' },
];

// 유저가 입력을 해서 새로운 메세지가 들어와야하는 상황.
const newMessages = [
  ...messages,
  { id: 6, userId: 2, message: '네 같이 가시죠!' },
];
console.log(newMessages);

// const newMessages = [newMessage, ...messages];
// console.log(newMessages);

console.log('===============================');

const getMessage = (messageArrays) => {
  messageArrays.filter(({ id }) => {
    if (id === 4) {
      console.log(messageArrays);
    }
  });
};

getMessage(newMessages);

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
