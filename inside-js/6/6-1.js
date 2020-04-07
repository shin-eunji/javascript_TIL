// var obj = {
//   outer: function() {
//     console.log(this);

//     var innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   }
// };
// obj.outer();

// setTimeout(function() {console.log(this);}, 300);

// [1,2,3,4,5].forEach(function(x){
//   console.log(this.x);
// });

// document.body.innerHTML += '<button id="a"클릭</button>';
// document.body.querySelector('#a')
//   .addEventListener('click', function (e) {
//     console.log(this. e);
//   });

// 자동차 게임
// 차량별로 연료량 및 연비는 랜덤
// 유저별로 차량 하나씩 고르면 게임 시작
// 각 유저는 자신의 턴에 주사위를 굴려 랜덤하게 나온 숫자만큼 이동함
// 만약 연료가 부족하면 이동불가
// 가장 멀리 간 사람이 승리

// var car = {
//   fuel : 10, // 연료(l)
//   power: 2,  // 연비 (km / l)
//   total: 0,
//   run: function(km) {
//     var wasteFuel = km / this.power;
//     if(this.fuel < wasteFuel) {
//       console.log('이동불가');
//       return;
//     }
//     this.fuel -= wasteFuel;
//     this.total += km;
//   }
// };

var creatCar = function(f, p) {
  var fuel = f;
  var power = p;
  var total = 0;
  return {
    run: function(km) {
      var wasteFuel = km / power;
      if(fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      total += km;
    }
  }
};

var car1 = creatCar(10,2);
var car2 = creatCar(20,4);