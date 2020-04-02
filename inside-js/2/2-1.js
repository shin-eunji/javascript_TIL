// function func(arg1, arg2) {
//   console.log(arg1, arg2);
// }

// func(); // undefined undefined
// func(1); // 1 undefined
// func(1, 2); // 1 2
// func(1, 2, 3); // 1 2

// function add(a, b) {
//   console.dir(arguments);
//   return a + b;
// }

// console.log(add(1)); // NaN
// console.log(add(1,2)); // 3
// console.log(add(1,2,3)); // 3

// function sum() {
//   var result = 0;

//   for(var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// console.log(sum(1,2,3)); // 6
// console.log(sum(1,2,3,4,5,6,7,8,9)); // 45

// var myObject = {
//   name : 'foo',
//   sayName : function() {
//     console.log(this.name); // 'foo'
//   }
// };

// var otherObject = {
//   name : 'bar'
// };

// otherObject.sayName = myObject.sayName;

// myObject.sayName(); // foo
// otherObject.sayName(); // bar

// var value = 100;

// var myObject = {
//   value : 1,
//   func1 : function() {
//     this.value += 1;
//     console.log('func1()' + this.value); // 103

//     func2 = function() {
//       this.value += 1;
//       console.log('func2()' + this.value); // 101

//       func3 = function() {
//         this.value += 1;
//         console.log('func3()' + this.value); // 102
//       }
//       func3();
//     }
//     func2();
//   }
// };

// myObject.func1();


// var Person = function (name) {
//   this.name = name;
// };

// var foo = new Person('foo');
// console.log(foo.name); // foo

// var foo = {
//   name: 'foo',
//   age : 35,
//   gender : 'man'
// };

// console.dir(foo);

// function Person(name, age, gender, position) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var bar = new Person('bar', 33, 'woman');
// console.dir(bar);

// var baz = new Person('baz', 25, 'woman');
// console.dir(baz);

// var qux = Person('qux', 20, 'man');
// console.log(qux);

// console.log(window.name);
// console.log(window.age);
// console.log(window.gender);

var foo = {
  name: 'foo',
  age: 27,
  gender: 'man'
};
console.dir(foo);

function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var bar = new Person('baz', 30, 'woman');
console.dir(bar);

var baz = new Person('baz', 23, 'man');
console.dir(baz);


function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);