// 미션 1
// 경품 추첨기 만들기
// 수를 입력받아 이 값이 1이면 '당첨! 냉장고' 2이면 '당첨! 세탁기', 3이면 '당첨! tv' 이외의 경우는 모두 '꽝입니다'를 출력
var luckyValue = window.prompt('행운의 번호를 고르세요.');

if(luckyValue == '1')
  document.write('당첨! 냉장고');
else if(luckyValue == '2')
  document.write('당첨! 세탁기');
else if(luckyValue == '3')
  document.write('당첨! tv');
else
  document.write('꽝입니다.');

// 미션 2
// if 활용하기
var value = window.prompt('마우스 버튼을 눌러주세요', '왼쪽');

if(value == '오른쪽')
  document.write('오른쪽! 버튼을 눌렀군요');
else if(value == '왼쪽')
  document.write('왼쪽! 버튼을 눌렀군요');
else if(value == '가운데')
  document.write('가운데! 버튼을 눌렀군요');
else
  document.write('도대체 뭘 누른거죠?');

var value = window.prompt('마우스 버튼을 눌러주세요', '왼쪽');

if(value == '오른쪽' || value == '왼쪽' || value == '가운데')
  document.write(value);
else
  document.write('도대체 뭘 누른거죠?');


// 미션 3
// 물고기 움직이기
$(document).ready(function() {
  var $fish = $('#fish');

  $('#btnStart').click(function() {
    var x = parseInt($('#txtX').val());
    var y = parseInt($('#txtY').val());

    if((x >= 0 && x <= 500) && (y >= 0 && y <= 300)) {
      $fish.css({
        left: x,
        top: y
      });
    } else {
      alert('입력한 값이 너무 큽니다. 다시 입력해주세요.')
    }
  });
})

// 미션 4
// 학점 구하기
// 요구사항
// 입력값이 100~90이면 A / 89~80이면 B / 79~70이면 C / 69~60이면 D / 59~이면 F

// 풀이 1
var value = window.prompt('평균 점수를 입력해주세요');

value = parseInt(value);
if (value >= 90 && value <= 100)
  alert(value + '이므로, A 학점입니다.');
else if (value >= 80 && value <= 89)
  alert(value + '이므로, B 학점입니다.');
else if (value >= 70 && value <= 79)
  alert(value + '이므로, C 학점입니다.');
else if (value >= 60 && value <= 69)
  alert(value + '이므로, D 학점입니다.');
else
  alert(value + '이므로, F 학점입니다.');

// 풀이 2
var value = window.prompt('평균 점수를 입력해주세요');

value = parseInt(value);

var grade = 'F';
if (value >= 90 && value <= 100)
  grade = 'A';
else if (value >= 80 && value <= 89)
  grade = 'B';
else if (value >= 70 && value <= 79)
  grade = 'C';
else if (value >= 60 && value <= 69)
  grade = 'D';
  else grade = 'F';

alert(value + '이므로, 학점은' + grade + '입니다.');

// 풀이 3
var value = window.prompt('평균 점수를 입력해주세요.');

value = parseInt(value);

var grade = 'F';
if(value >= 90)
  grade = 'A';
else if(value >= 80)
  grade = 'B';
else if(value >= 70)
  grade = 'C';
else if(value >= 60)
  grade = 'D';
else 
  grade = 'F';

alert(value + '이므로, 학점은 ' + grade + ' 입니다');

