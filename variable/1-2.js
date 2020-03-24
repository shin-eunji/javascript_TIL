// 예제 1 (숫자 타입)
// 여러분의 나이와 몸무게를 각각 age, weight 변쉥 담아주세요
var age = 27;
var weight = 50;

var age = 27, weight = 50;

// 예제 2 (문자열 타입)
// 여러분의 아이디를 id라는 변수에 저장해 주세요.
var id = 'sinej1020';

// 예제 3 (문자열 값)
// 여러분의 나이를 age라는 변수에 문자열 값으로 저장해 주세요.
var age = '27';

// var age = 27 와 var age = '27'는 다르다.
// 숫자 타입과 문자열 타입은 전혀 다른 값을 가지고 있다.

// 예제 4 (불리언 타입)
// 현재 날씨가 추운지 아닌지 cold변수에 담아 표현해 주세요.
var cold = false; // 춥지 않습니다.

// 예제 5
// 로그인 유무를 login 변수에 담아보세요.
var login = true;

// 예제 6 (undefined)
// 변수를 선언하고 그 변수에 값을 대입하지 않은 경우
var x; // 변수 선언 시, 초기화 단계에서 undefined로 결과값이 나옵니다.

// 예제 7
// 함수 인자 값 없이 함수를 호출한 경우
function myFunc(dataValue) {
  alert('데이터 값 =' + dataValue);
}

myFunc('20'); // 데이터 값 = 20
myFunc(); // undefined (인자값이 없기때문에 호출하여 매개변수에 undefined가 나옵니다.)

// 예제 8
// 존재하지 않는 객체의 프로퍼티에 접근하는 경우
function MyClass() {
  this.name = 'shineunji'
}

var user = new MyClass();
alert('userName =' + user.name);
alert('userName =' + user.userName); //undefined

// 예제 9 (null)
// null 값으로 데이터를 초기화하는 경우
// 숫자 변수 초기화
var data1 = 0;

// 문자열 변수 초기화
var name = '';

// 논리형 변수 초기화
var data2 = false;

// 객체 변수 초기화
var date3 = null;














