// 예제 1
// 여러분의 나이를 입력 받은 후 여기에 30을 더한 값을 콘솔 창에 출력해 주세요.
// var age = 27;
// age = age + 30;
// console.log(age);

var age = window.prompt('나이를 입력해주세요.');
age = parseInt(age) + 30;
alert(age);

// 예제 2 
// 아래와 같은 구문이 실행되는 변수 result에는 어떤 값이 저장될까요?
var a = '30';
var result = 1 + a + 10;
alert(result); // '1' + '30' + '10' = 13010
// 문자열로 암시적 형변환이 일어나 문자열이 만들어짐.

// 예제 3
// 아래와 같은 구문이 실행되면 변수 result에는 어떤 값이 저장될까요?

var result = 2 + true;
alert(result); // 2 + 1 = 3
// true일 때 암시적 형 변환으로 1로, false일 때, 0으로 변환됨.

// 예제 4
// 아래와 같은 구문이 실행되면 변수 result에는 어떤 값이 저장될까요?
var result = '2' + true;
alert(result); // 2true;
// 문자열 + 불리언 타입이 연산자와 함께 오면 문자열로 형 변환됨.


