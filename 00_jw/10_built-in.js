const mMap = (arrays) => {
  // arrays :  [1, 2, 3, 4, 5];
  // result 는 map 을 썻기때문에 배열임. arrays 는? 포이치와 같음.
  // 그니까 arrays 는 하나하나 뽑아서 array 에 넣어주는것.
  // 한번 넣어줄때(한번 map이 진행될때 or arrays의 0번째 인덱스에 있는값을 array에 넣어줄때)
  // array + index; 를 더해서 return 해라. 그리고 result 라는 새로운 배열(map을 썻으니까)에 넣어라.
  // 즉 result 는 한번 진행할때 result = [ x , ... ] 가 되겠지?
  const result = arrays.map((array, index) => {
    console.log(`array: ${array} index: ${index}`);
    return array + index;
  });
  console.log(result);
};

const mReduce = (arrays) => {
  const result = arrays.reduce((sum, number) => {
    console.log(`sum: ${sum} number: ${number}`);
    return sum + number;
  }, 0);
  console.log(result);
};

const average = (arrays) => {
  const result = arrays.reduce((sum, number, index, arrays) => {
    if (index === arrays.length - 1) {
      return sum + number / arrays.length;
    }
    return sum + number;
  }, 0);
  console.log(result);
};

const array = [3, 4, 5, 6, 7];
mReduce(array);
// mMap(array);
// average(array);

// reduce 는 배열이 아니라 값을 반환하고
// map 은 배열을 무언가 반복해서 가공된 배열을 반환한다.

// 뭔가 연산을해서 값 하나를 반환할꺼면 당연히 reduce 를 써야한다.
// 그런데 원본배열을 가공해서 다시 배열로 뽑고싶다면 map 을 써야한다.
//
