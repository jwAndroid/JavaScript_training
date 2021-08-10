const calculateCircleArea = (r = 1) => Math.PI * r * r;
console.log(calculateCircleArea(4));
console.log(calculateCircleArea());

// 함수의 디폴트값을 r = 1 이런식으로 잡고 , 언디파인드 일대 r = 1 이 된다는것.
