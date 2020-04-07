// function Person(arg) {
//   this.name = arg;

//   this.getName = function() {
//     return this.name;
//   }

//   this.setName = function(value) {
//     this.name = value;
//   }
// }

// var me = new Person('shin');
// console.log(me.getName()); // shin

// me.setName('jin');
// console.log(me.getName()); // jin

// Function.prototype.method = function(name, func) {
//   this.prototype[name] = func;
// }

// function Person(arg) {
//   this.name = arg;
// }

// Person.method('setName', function(value) {
//   this.name = arg;
// });

// Person.method('getName', function() {
//   return this.name;
// });

// var me = new Person('me');
// var you = new Person('you');
// console.log(me.getName());
// console.log(you.getName());

// var person = {
//   name : 'shin',
//   getName : function() {
//     return this.name;
//   },
//   setName : function(arg) {
//     this.name = arg;
//   }
// };

// function create_object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }

// function extend(obj, prop) {
//   if(!prop) {prop = obj; obj = this;}
//   for(var i in prop) obj[i] = prop[i];
//   return obj;
// };

// var student = create_object(person);
// var added = {
//   setAge : function(age) {
//     this.age = age;
//   },
//   getAge : function() {
//     return this.age;
//   }
// };

// extend(student, added);

// student.setAge(25);
// console.log(student.getAge());
// console.dir(student.getAge());

// var child = function() {
//   var parent = child.parent;
//   if (parent.hasOwnProperty('_init')) {
//     parent._init.apply(this, arguments);
//   }
//   if(child.prototype.hasOwnProperty('_init')) {
//     child.prototype._init.apply(this, arguments);
//   }
// };



// // 자식을 또 다른 함수가 다른 상속 받았을 때

// var SuperClass = subClass();
// var SubClass = SuperClass.subClass();
// var Sub_SubClass = SubClass.subClass();

// var instance = new Sub_SubClass(); // 인스턴스 생성할 때 상위 클래스의 상위 클래스인 SuperClass의 생성자가 호출이 되지 않음.

