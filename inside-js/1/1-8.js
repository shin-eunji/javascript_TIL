// var colorArr = ['orange', 'blue', 'red', 'yellow'];

// console.log(colorArr[0]); // 'orange'
// console.log(colorArr[1]);

// var emptyArr = []; // 빈 배열 
// console.log(emptyArr[0]); // undefined

// emptyArr[0] = 100;
// emptyArr[3] = 'hello';
// emptyArr[10] = true;

// console.log(emptyArr);
// console.log(emptyArr.length);

var arr = ['zero', 'one', 'two'];

// arr.push('three'); // 배열 추가. push() 메서드 추가
// console.log(arr); // ['zero', 'one', 'two', 'three']

// arr.length =  5;

// arr.push('four');
// console.log(arr);


// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// // 배열 리터럴
// var colorArray = ['orange', 'yellow', 'red'];

// console.log(colorArray[0]); // orange
// console.log(colorArray[1]); // yellow
// console.log(colorArray[2]); // red

// // 객체 리터럴
// var colorObj = {
//   '0': 'orange',
//   '1': 'yellow',
//   '2': 'red'
// };
// console.log(colorObj[0]); // orange
// console.log(colorObj[1]); // yellow
// console.log(colorObj[2]); // red

// // typeof 연산자 비교
// console.log(typeof colorArray); // object
// console.log(typeof colorObj); // object

// // length 프로퍼티
// console.log(colorArray.length); // 3
// console.log(colorObj.length); // undefined

// // 배열 표준 메서드
// colorArray.push('blue'); // ['orange', 'yellow', 'red', 'blue']
// colorObj.push('red'); // TypeError

// for (var prop in arr) {
//   console.log(prop, arr[prop]);
// }

// for (var i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// var arr = ['zero', 'one', 'two', 'three'];

// console.log(arr.length);

// delete arr[2];

// console.log(arr);
// console.log(arr.length);

// arr.splice(2, 1);
// console.log(arr);
// console.log(arr.length);

// var factorialVar = function factorial(n) {
//   if(n <= 1) {
//     return 1;
//   }
//   return n * factorial(n-1);
// };

// console.log(factorialVar(3));
// console.log(factorial(3));

// (function (name) {
//   console.log('hello, world~!' + name);
// }) ('foo');

var self = function() {
  console.log('a');
  return function() {
    console.log('b');
  }
}

self = self(); // a
self(); // b