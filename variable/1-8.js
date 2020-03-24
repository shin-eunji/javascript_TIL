// 미션 1
// 변수란 무언인가요?
// 1. 데이터 저장 공간
// 2. 데이터를 여러 번 사용할 경우, 재사용이 편리함.
// 3. 데이터를 읽고 쓰고 하는 공간

// 미션 2
// 변수 문법
var x = 10;
var name = 'shin';

// 미션 3
// 변수에 저장할 수 있는 데이터를 모두 나열해주세요.
숫자, 문자열, 불리언, null, undefined, symbol, 함수, 클래스, 인스턴스

// 미션 4
// 자신의 ID를 변수에 저장한 후, document.write()를 이용하여 화면에 출력해주세요.
var id = 'shineunji';
document.write(name);

// 미션 5
// 현재 날씨가 추운지 안추운지 cold라는 변수에 담아 document.write()를 이용하여 화면에 출력해주세요.
var cold = false;
document.write('cold = ', cold);

// 미션 6
// 본인의 이름, 나이, 직업, 주소 정보를 변수에 담아 화면에 document.write()를 이용해서 출력해주세요.
var name = '신은지';
var age = '27';
var job = 'student';
var address = 'Bucheon';

document.write(name);
document.write(age);
document.write(adress);
document.write(job);

var person = function() {
  name = '신은지',
  age = '27',
  job = 'student',
  address = 'Bucheon'
}
console.log(person);

// 미션 7
// 다음 예제를 실행하면 a, b는 어떤 값이 출력될까요?
var a = 10;
var b = a;
a = 30;
console.log('a = '+a+', b = '+b); // a = 30 , b = 10

// 미션 8
var name = '은지';
var data = '자바스크립트';

for (var i = 0; i < 10; i++) {
  document.write(i + '.' + name + '는 ' + data + '를 잘합니다.' + '<br>');
}

