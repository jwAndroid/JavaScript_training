//많이 중요 var를 쓰면 안되는이유. 혹시모르니까 구글링

// const a = 1;
// if (a + 1 === 2) {
//   console.log("a + 1 은 2와 같다. ");
// }

// // node 루트/ 파일명 === 실행

// const b = 1;
// if (true) {
//   const b = 2;
//   console.log("if 안의 값은 " + b);
// }
// console.log("if 밖의 값은 " + b);

// 컨스트랑 렛은 블록범위(스코프) 이겠지?
//b가 범위를 못넘어감
// 근데

// var b = 1;
// function fun1() {
//   //함수범위 ...
//   var b = 2;

//   if (true) {
//     //블록범위 ...
//     var b = 3;
//     console.log('if 안의값은?: ' + b);
//     //블록범위 ...
//   }

//   var b = 4;
//   console.log('if 밖 의값은?: ' + b);
//   //함수범위 ...
// }
// fun1();
// console.log('if밖 의값은?: ' + b);

// var 는 함수범위
// let , const 는 블록범위
// 하여튼 var는 절때 쓰지말자!

// const c = 10;
// if (c > 15) {
//   console.log("c가 15보다 크다." + c);
// } else if (c === 10) {
//   console.log("c는 10이다." + c);
// } else {
//   console.log("c가 15보다 작다.");
// }

// const device = 'android';
// switch (device) {
//   case 'android':
//     console.log('안드로이드');
//     break;
//   case 'iphone':
//     console.log('아이폰');
//     break;

//   default:
//     console.log('알 수 없음');
// }
