// var foo = {
//   name : 'foo',
//   age : 27,
//   major : 'computer science'
// };

// console.log(foo.age);
// delete foo.age;
// console.log(foo.age);

// var prop; 
// for (prop in foo) {
//   console.log(prop, foo[prop]); //name: 'foo', age: 27, major:'computer science'
// }
// prop로 선언한 변수에 foo 객체의 프로퍼티의 값이 할당되면서 prop에 할당된 foo[prop]를 출력하면 foo프로퍼티 값이 나옴.

// var objA = {
//   val : 40
// };
// var objB = objA;

// console.log(objA.val);
// console.log(objB.val);

// objB.val = 50;

// console.log(objA.val);
// console.log(objB.val);

// var a = 100;
// var b = 100;

// var objA = {
//   value : 100
// };

// var objB = {
//   value : 100
// };

// var objC = objB;

// console.log(a == b); // true
// console.log(objA == objB); // false
// console.log(objB == objC); // true

var a = 100;
var objA =  {
  value : 100
};

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log(num); // 200
  console.log(obj); // { value: 200 }
}

changeArg(a, objA);

console.log(a); // 100
console.log(objA); // { value: 200 }

