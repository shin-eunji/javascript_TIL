// 변수 종류

// 전역 변수
var globalV = '전역변수';

window.onlooad = function() {
  global2 = '전역변수';
}

function func() {
  var local = '지역변수';
}

// 지역 변수
var globalV = '전역변수';

window.onload = function() {
  var local1 = '지역변수';
}

function func1() {
  var local1 = '지역변수';
}

function func2 () {
  document.write(globalV);
}

// 매개변수
var globalV = '전역변수';

window.onload = function() {
  var local1 = '지역변수';
  this.func(100, 200);
}

window.onload = function () {
  var local1 = '지역변수';
  
  document.write('매개변수 num1 =' + num1 + ', num2 =' + num2);
}