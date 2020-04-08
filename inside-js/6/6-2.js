// function Person(n, a) {
//   this.name = n;
//   this.age = a;
// }

// Person.prototype.setOlder = function() {
//   this.age += 1;
// }

// Person.prototype.getAge = function() {
//   return this.age;
// }

// let gomu = new Person('고무곰', 30);
// let iu = new Person('아이유', 27);

// console.dir(gomu);
// console.dir(iu);

// var arr = [1,2,3];
// // arr.toString = function() {
// //   return this.join('_');
// // }
// Array.prototype.toString = function() {
//   return this.join;
// }

// console.dir(arr.toString());
// console.dir(arr.__proto__.toString.call(arr));
// console.dir(arr.__proto__.__proto__.toString.call(arr));

var count = 0;

var cbFunc = function() {
  console.log(count);
  if(++count > 30) clearInterval(timer);
};

var timer = setInterval(cbFunc, 1500);

