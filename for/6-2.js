// 예제 1
// continue 문

for(var i = 0; i < 10; i++) {
  continue;
  console.log(i);
}
console.log('종료' + i);

// 예제 2
// 별표 출력하기
// for(var i = 0; i < 5; i++) {
//   var result = '';
//   for(var star = 0; star <= i; star++) {
//     result+='*';
//   }
//   console.log(result);
// }

// for(var i = 0; i < 5; i++) {
//   var count = 1;
//   var result = '';
//   for(var star = 0; star < count; star++)
//     result += '*'
//   console.log(result);
// }

// 예제 2
for (var i = 0; i < 5; i++) {
  var result = '';
  for (var j = 5; j > i; j--) {
    result += '*';
  }
  console.log(result);
}

// 예제 3
// 3단 구구단
var dan = 8;

for(var i = 1; i < 10; i++) {
  console.log(dan + 'x' + i + '=' + (dan * i));
}

// 예제 4
// 배열의 총 합 구하기
var data = [10, 20, 30, 40, 50];

var result = 0;
for(var i = 0; i < data.length; i++) {
  result += data[i];
} 
console.log(result);