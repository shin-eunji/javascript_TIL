// // console.log('this is global context');

// function ExContext1() {
//   console.log('this is ExContext1');
// };

// function ExContext2() {
//   ExContext1();
//   console.log('this is ExContext2');
// };

// ExContext2();

// function execute(param1, param2) {
//   var a = 1, b = 2;
//   function func() {
//     return a + b;
//   }
//   return param1 + param2 + func();
// }

// execute(3, 4); // 3 + 4 + 3 = 10
// // console.log(execute());

// var var1 = 1;
// var var2 = 2;

// function func() {
//   var var1 = 10;
//   var var2 = 20;
//   console.log(var1);
//   console.log(var2);
// }

// func();
// console.log(var1);
// console.log(var2);

// var value = 'value1';

// function printFunc() {
//   var value = 'value2';
  
//   function printValue() {
//     return value;
//   }

//   console.log(printValue());
// }

// printFunc(); //value2

// function outerFunc(arg1, arg2) {
//   var local = 8;

//   function innerFunc(innerArg) {
//     console.log(arg1 + arg2) / (innerArg + local); // 2 + 4 / // exam1(2) = 2 + 8
//   }
//   return innerFunc;
// }
// var exam1 = outerFunc(2,4);
// exam1(2); // 6


// function helloFunc() {
//   this.greeting = 'hello'; // greeting 변수
// }

// helloFunc.prototype.call = function(func) {
//   func ? func(this.greeting) : this.func(this.greeting); 
// }

// var userFunc = function(greeting) {
//   console.log(greeting);
// }

// var objHello = new helloFunc();

// objHello.func = userFunc;
// objHello.call(); // hello

// function countSeconds(howMany) {
//   for (var i = 1; i <= howMany; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// };

// countSeconds(3);

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function (currentI) {
      setTimeout(function() {
        console.log(currentI);
      }, currentI * 1000);
    }(i));
  }
};

countSeconds(10);