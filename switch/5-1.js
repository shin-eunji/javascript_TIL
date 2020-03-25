// if문으로 구현
// if(경품번호 = 1) {
//   냉장고 당첨;
// }
// else if(경품번호 = 2) {
//   tv 당첨
// }
// else if(경품번호 = 3) {
//   세탁기 당첨
// }
// else {
//   꽝;
// }

// switch {
//   case 1 : 
//     냉장고 당첨;
//     break;
//   case 2 : 
//     tv 당첨;
//     break;
//   case 3 : 
//     세탁기 당첨;
//     break;
//   default :
//     꽝;  
// }

// 예제 1
// if문으로 되어 있는 구문을 switch문으로 변경해 주세요.
var luckyValue = window.prompt('두근! 두근! 행운의 번호를 고르세요.');

if(luckyValue == '3')
  document.write('당첨! 냉장고');
else if(luckyValue == '2')
  document.write('당첨! tv');
else if(luckyValue == '1')
  document.write('당첨! 세탁기');
else
  document.write('꽝');

// switch
var luckyValue = window.prompt('두근! 두근! 행운의 번호를 고르세요.');

switch (luckyValue) {
  case '3' :
    document.write('당첨! 냉장고');
    break;

  case '2' :
    document.write('당첨! tv');
    break;

  case '1' :
    document.write('당첨! 세탁기');
    break;

  default :
    document.write('꽝');
}
