// 예제 1
// 10이 저장돼 있는 변수 a와 숫자 20, 그리고 30을 더해서 변수 result에 저장한 후 결과값을 콘솔에 출력해주세요.
var a = 10;
var b = 20;
var c = 30;
var result = a + b + c;
console.log(result);

// 에제 2
// 50이 저장돼 있는 변수 a와 20이 저장돼 있는 변수 b를 곱한 값을 다시 10으로 나눈 값을 result에 저장해주세요.
var a = 50;
var b = 20;
var result = (a * b) / 10;
console.log(result);

// 예제 3
// 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result에 저장한 후, 결과값을 콘솔에 출력해주세요.
var result = 5 % 2;
console.log(result);

// 예제 4
// 나머지 연산자를 이용해서 숫자 5가 짝수인지 홀수인지 알아내는 구문을 작성해주세요.
var result = 5 % 2;
if(result == 0)
  alert('짝수');
else
  alert('홀수');