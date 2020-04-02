// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('foo');

// console.dir(Person); // [Function: Person]
// console.log(foo); // Person { name: 'foo' }

// var myObject = {
//   name: 'foo',
//   sayName: function() {
//     console.log('my name is ' + this.name);
//   }
// };

// myObject.sayName();
// console.log(myObject.hasOwnProperty('name'));
// console.log(myObject.hasOwnProperty ('nickName'));



// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('foo');

// // foo.sayHello();

// Person.prototype.sayHello = function() {
//   console.log('hello');
// }

// foo.sayHello(); // hello

// function Person(name) {
//   this.name = name;
// }
// console.log(Person.prototype.constructor);

// var foo = new Person('foo');
// console.log(foo.country);

// Person.prototype = {
//   country: 'korea'
// };
// console.log(Person.prototype.constructor);

// var bar = new Person('bar');

function Person(name) {
  this.name = name;
}

