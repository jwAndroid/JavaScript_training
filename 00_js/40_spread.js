const animals = ['개', '고양이', '참새'];
const updateAnimals = [...animals, '비둘기'];
//39와 마찬가지로 , 객체가 아닌 배열도 이렇게 풀수가 있음.
console.log(animals);
console.log(updateAnimals);

console.log('========================');

const numbers = [1, 2, 3, 4, 5];
const updatedNumbers = [...numbers, 1000, ...numbers];
console.log(numbers);
console.log(updatedNumbers);

const messages = [
  { id: 1, userId: 1, message: 'asdsadfasdf' },
  { id: 2, userId: 2, message: 'asdsadfas23df' },
  { id: 3, userId: 1, message: 'asdsadfa123sdf' },
  { id: 4, userId: 2, message: 'asdsadfa123sdf' },
  { id: 5, userId: 1, message: 'asdsadfa123sdf' },
];
//이런 객체배열이 있을때

const newMessage = { id: 6, userId: 2, message: '123j123kjksdf' };
// 새로운 객체가 들어온다?

const newMessages = [...messages, newMessage];
//...messages 를 풀어서 newMessage 를 그 뒤에 바로 겹치겠다.

//const newMessages = [newMessage , ...messages];
//이렇게 되면?? 순서가 바뀐다. 그니까 메세지는 최신이 가장 밑에와야하니까 위에꺼로 쓴거
//위에는 반대의 상황

// const x = newMessages.map(({ message }) => <div>{message}</div>);
//그리고 갱신된 newMessages 를 map 돌려서 messages.message 를 풀어가지고 message 이렇게 쓰는거
//!!!이부분 상당히 중요함!!!

/* 예제 map filter  // reduce 는 상당히 중요함. */
// const newX = newMessages.filter(( messages ) => messages.id !== 4);
// const newX = newMessages.filter(({ id }) => id !== 4);
// console.log(newX);
// 이부분 예제인데 messages 는 안풀어진거고 { id } 는 풀어진건데 {}이부분 꼭 써줘야한다
// 그리고 id가 4번인경우만 제거하고싶다면 조건부분 잘 살펴보면 filter 를 써야되지 않을까
// 그 filter 로 (({ id }) => id !== 4); messages를 풀어서 id !== 4 경우만 제외하고 뽑는것
// 맵 필터는 머리에 꼭 받아넣어야함. 헤메면 안될만큼 정말 중요하다고 함.

// map 은 해당배열을 돌면서 값을 <div>{message}</div> 변환시킨다고 보면됨.
// filter 는 어떤 조건이 있을때 뭐 id가 3인경우만을 뽑아라 내용이 ~거랑 같은경우만을 뽑아라 하는경우일때 쓰는건데
// 해당부분 너무 중요해서 머리에 꼭 박아넣어야함.

//리액트는 절때 원본을 건들면 안된다!! 사본(배열이든 객체배열이든 뭐든) 을 만들어서 사본을 건들여야한다.
//왜냐면 원본이랑 사본이랑 비교해서 다르면 사본을 바로쓰기때문에 성능자체가 좋기때문에 그럼.
//중요한건 원본을 절때 건들면 안되고 , 뭔가 변형된 사본이 나와야한다는것
//버츄얼 돔 이라고함
//리액트는 예를들어서 피드가 1000개 있고 , 새로운게 1개 들어오면 , 리액트는 1001번 보는게 아니고 1번만 본다는것
//https://thisblogfor.me/react/hooks_memoization/ 메모이제이션 memo 항상 있는것 이게 그 설명

//리액트는 처음에 가져올때 전부 모든데이터를 가져오는거고 그래서 새로고침이나 다른페이지 갈때 흰색화면이 안보임.
//그러면 업데이트할때 그 업데이트된애 딱 하나만 업데이트 하는것이다. 그러면 당연히 성능적으로 빠름
//반면에 next.js ()는 예를들어서 모든게 있다면 그중 하나만을 가져와서 하나만 뿌려주고 다음꺼를 미리 가져오면서
//로드해주는것
