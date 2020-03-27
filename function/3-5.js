// 전역변수: 전역에서 사용하는 데이터를 담는 변수, 어디서든 접근해서 사용 가능. / 이제 막 스크립트를 시작한 초보라면 전역변수를 가장 많이 만들게 됨.
// 지역변수: 특정 영역에서만 사용할 수 있는 변수. 주로 함수 내부에 만들어지는 변수.

// 예제 1
// var name = 'test1';
// function func1() {
//   var name = 'test2';
//   console.log(name);
// }
// function func2() {
//   var name = 'test5';
//   console.log(name);
// }
// function func6() {
//   name = 'test10';
//   console.log(name);
// }
// console.log(name);
// func1();
// func2();
// func6();
// console.log('test20');

// 예제 2
// function func1() {
//   var name = 'shin eunji';
//   console.log(name); // shin eunji
// }
// func1();

// console.log(name); //undefined

// 예제 3
var a = 10;
var b = 20;

function func1() {
  var b = 30;
  console.log(a);
  console.log(b);
  a = 50;
}
func1();

console.log(a);
console.log(b);