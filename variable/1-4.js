// 변숫값이 자동으로 읽혀지는 경우.
// 자동으로 읽혀지는 경우
// 1. 우측에 변수를 두는 경우
// 2. 함수 호출 시 변수를 매개변수 값으로 사용하는 경우
// 3. 연산자와 함꼐 사용하는 경우.

// 예제 1 (변수를 우측으로 두는 경우)
// 다음 구문이 어떻게 해석되는지 설명해 주세요.
var name = 'shin';
var person = name;
// name이라는 변숫값 'shin'이 복사돼 person변수에 대입됨.

// 예제 2 (함수 호출 시 변수를 매개변수 값으로 사용)
// 다음 구문이 어떻게 해석되는지 설명해 주세요.
function test1(userName) {
  alert('name =' + userName);
}
var name = 'shin';
test1(name);

// 예제 3 (연산자와 함께 사용함.)
// 다음 구문이 어떻게 해석되는지 설명해 주세요.
var num1 = 10;
var num2 = 20;
var result = num1 + num2;

alert(result); // 30

// 연산자를 통해 num1과 num2를 더하여 result변수에 30이 나오게 됩니다.
