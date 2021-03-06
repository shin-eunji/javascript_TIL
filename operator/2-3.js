// 복합 연산자
// 예제 1
// 다음 내용을 복합 연산자를 이용해 간단하게 표현해주세요.
var a = 10;
a += 10;
console.log(a);

// 증감 연산자
// 예제 2
// 다음 내용을 증감 연산자를 이용해서 짧게 표현해주세요.
var a = 10;
a++;
console.log(a);

// 예제 3
// 다음 내용을 증감 연산자를 이용해서 짧게 표현해주세요.
var a = 10;
a--;
console.log(a);

// 전위 연산자, 후위 연산자 차이점
// 같은 것처럼 보이지만 결과값을 다른 변수에 대입하는 경우, 결과값이 완전히 달라짐.

// 예제 4
var a = 1;
var b = ++a;
// a = 2, b = 2
// a는 증가하고 a+1이 되었고, b도 2가 됨.

// 예제 5
var a = 1;
var b = a++;
// a = 2, b = 1
// b는 a부터 왔기때문에 a의 값인 1로 할당함. 그리고 a는 자기 자신만 증가됨.



