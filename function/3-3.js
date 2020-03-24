// 명시적 형변환

// 1. 문자를 숫자로 형변환하는 방법
// 정수형
// parseInt() 
// Number()

// 실수형
// parseFloat()
// Number()

// 2. 숫자를 문자로 형변환하는 방법
// 일반 문자형
// String()
// Number.toString()
// Number.toFixed()

// 예제 1
// 변수 test1에 들어 있는 숫자 값을 문자로 변형해 주세요.
// var test1 = 15;
// var test1 = String(test1); // '15'

// var test1 = 15;
// var result = test1.toString();
// console.log(result);

// 예제 2
// $(document).ready(function() {
//   var bgColor = 0xF00;
//   $('body').css('background-color', '#' + bgColor.toString(16));
// })

// 예제 3
$(document).ready(function() {
  setInterval(function() {
    var color = Math.random() * 0xffffff;
    color = parseInt(color);
    color = color.toString(16);

    $('body').css('background-color', '#' + color);
  }, 1000);
})
