// 예제 1
// 사용자 아이디 하나를 입력받아 아이디가 'sinej1020'이라면 '환영합니다!'메시지를 출력하고, 그렇지 않은 경우 '운영자가 아닙니다'라는 메시지를 출력해주세요.
var userID = window.prompt('사용자 아이디는?');

if(userID == 'sinej1020')
  alert('환영합니다.');
else
  alert('운영자가 아닙니다.');

// 예제 2
// 물고기 움직이기
// 제이쿼리로 인한 

// 예제 3
// 아이디 패스워드 확인 테스트
var userID = window.prompt('사용자 아이디는?');
var userPW = window.prompt('사용자 패스워드는?');

if(userID == 'sinej1020' && userPW == '1234')
  alert('환영합니다.');

var userID = window.prompt('사용자 아이디는?');   
var userPW = window.prompt('사용자 패스워드는?');

if(userID == 'sinej1020') {
  if(userPW == '1234') {
    alert('환영합니다.');
  }
}
