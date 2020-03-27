// document.write('안녕하세요. 환영합니다.');
// document.write('안녕하세요. 환영합니다.');
// document.write('안녕하세요. 환영합니다.');

// 예제 1
function hello() {
  console.log('안녕하세요. 환영합니다.');
}
hello();
hello();
hello();

// 예제 2
// var star = '';
// for(var i = 0; i <= 5; i++) {
//   for(var j = 0; j < i; j++) {
//     star += '*';
//   }
//     star += '<br>';
// }
// console.log(star);

function star() {
  var star = '';
  for(var i = 0; i <= 5; i++) {
    for(var j = 0; j < i; j++) {
      star += '*';
    }
    star += '/';
  }
  console.log(star);
}

star();
star();
star();
star();
star();

