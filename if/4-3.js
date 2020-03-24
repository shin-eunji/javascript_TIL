// 예제 1
// 사용자 아이디 하나를 입력받아 아이디가 'ddandongne'라면 '환영합니다.'라는 메시지 출력
// 값 입력 선언
var userID = window.prompt('사용자 아이디는?');

// 값 비교
if(userID == 'ddandongne')
  alert('환영합니다.');
else(userID != '')
    alert('실패하셨습니다.');

// 예제 2
// 사용자로부터 하나의 수를 입력받아 입력값이 짝수이면 '짝수입니다'라는 메시지를 출력해 주세요.
var value = window.prompt('수를 입력해주세요.');

value = parseInt(value);

if(value % 2 == 0)
  alert('짝수입니다.')
else(value % 2 == 1)
  alert('홀수입니다.')
  
// 예제 3
// 다음 구문을 실행하면 화면에 어떤 값이 실행될까요?
var value = 5;
if(value > 10);
  alert('10보다 작은 값을 입력해주세요.');
// 조건문이 false 이기에 10보다 작은 값을 입력해주세요.