// // 매개변수
// var add = function(x,y) {
//   return x + y;
// };
// var plus = add;
// console.log(add(3,6));
// console.log(plus(5,10));

// var add = function sum(x, y) {
//   return x + y;
// };

// console.log(3,5);

// var add = function sum(x,y) {
//   return x + y;
// };
// console.log(add(3,4)); // 7
// console.log(sum(3,4)); // ReferenceError

// var factorialVar = function factorial(n) {
//   if(n <= 1) {
//     return 1;
//   }
//   return n * factorial(n-1);
// };

// var add = new Function('x', 'y', 'x+y');
// console.log(add(3,4)); // 7

// // 선언문 방식
// add(2,3); // 5
// function add(x,y) {
//   return x + y;
// }
// add(3, 4); // 7

// // 함수 표현식 방식
// add(2, 3); // TypeError

// var add = function (x, y) {
//   return x + y;
// };

// add(3, 4); // 7

// 선언 방식에는 세미콜론을 붙이지 않습니다.
function add(x, y) {
  return x + y;
}

add.result = add(3,2);
add.status = 'OK';

console.log(add.result); // 5
console.log(add.status); // 'OK'


function parent() {
  var a = 100;
  var b = 200;
  function child() {
    var b = 300;
  console.log(a);
  console.log(b);
  }
  child();
}
parent();
child(); // 함수 외부에서 child()함수 호출 불가

