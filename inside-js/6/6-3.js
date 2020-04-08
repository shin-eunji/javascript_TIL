// 외부 함수의 변수를 참조하는 내부함수

// 사례 1
// var outer = function() {
//   var a = 10;
//   var inner = function() {
//     console.log(++a);
//   };
//   inner();
//   console.log(--a);
// };
// outer();

// 사례 2
// var outer = function() {
//   var a = 1;
//   var inner = function() {
//     return ++a; // 2
//   };
//   return inner(); // 2
// };

// var outer2 = outer();
// console.log(outer2); // 2


// 사례 3
var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
};

var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
console.log(outer2()); // 4