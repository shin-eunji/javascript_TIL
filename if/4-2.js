// 논리 비교 연산자
// 예제 1
// 변수 a, b 값 중 a가 큰 경우일 때 참이 되게 비교 연산자를 이용해서 표현해 주세요.

var a = 10;
var b = 20;
var result = a > b;
console.log(result); // false  (10 > 20)은 거짓이기 때문에

// 예제 2
// 변수 a, b가 같은 경우일 때 참이 되게 비교 연산자를 이용해서 표현해 주세요.
var a = 10;
var b = 20;
var result = a == b;
console.log(result); // false (10 == 20) 10과 20은 값이 다르기 때문에 false가 나옴.

// 예제 3
// 변수 a, b가 같지 않은 경우 참이 되게 비교 연산자를 이용해서 표현해 주세요.
var a = 10;
var b = 20;
var result = a != b;
console.log(result); // true a와 b는 같지 않기 때문에 부정연산자를 통해 값을 바꿔줌.

// 논리 연산자 (&& 논리곱)
// 예제 4
// 성별이 남자이면서 개발자인 분을 찾아주세요.
var a = '남자';
var b = '개발자';
var result = (a == '남자') && (b == '개발자');
console.log(result); // 둘 다 맞아야 true, 둘 중 하나라도 맞지 않으면 false

// 논리 연산자 (|| 논리합)
// 예제 5
// 성별이 남자이거나 개발자인 분을 찾아주세요.
var a = '남자';
var b = '개발자';
var result = (a == '남자') || (b == '개발자');
console.log(result); // 남자 이거나 개발자 이거나 둘 중 하나만 true이면 true

// 예제 6
// 다음 예제를 실행하면 화면에는 어떤 값이 출력될까요?
var a = true;
var b = false;
var c = 10;
var d = 20;
if(a == true)
  document.write('a == true 실행');
if(c > 10)
  cdocument.write('c > 10 실행')
if(10 > c)
  cdocument.write('10 > c 실행')
if(c < 10)
  cdocument.write('c < 10 = 실행')

// 예제 7
// 다음 예제를 실행하면 화면에는 어떤 값이 출력될까요?
var a = true;
var b = false;

if (a == false || b == true)
  document.write('a == true || b == true');

if (a == 1 && b == 0)
  document.write('a == 1 && b == 0 = 실행');