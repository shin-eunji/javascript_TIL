// 각 턴마다 주사위를 굴려 나온 숫자(km)만큼 이동
// 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성
// 남은 연료가 이동할 거리에 필요한 연료보다 부족하면 이동하지 못함.
// 모든 유저가 이동할 수 없는 턴에 게임이 종료됨.
// 게임 종료 시점에 가장 멀리 이동해 있는 사람이 승리.

let car = {
  fuel: Math.ceil(Math.random() *10 + 10),
  power: Math.ceil(Math.random() * 3 + 2),
  moved: 0,
  run: function() {
    let km = Math.ceil(Math.random() * 6);
    let wasteFuel = km / this.power;
    if(this.fuel < wasteFuel) {
      console.log('이동불가');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
  }
};

car.fuel = 10000;
car.moved = 1000;
car.power = 100;

car.run();
console.log(car.moved);
console.log(car.fuel);
console.log(car.power);

car.fuel = 1000;
console.log(car.fuel);
car.run();

car.power = 100;
console.log(car.power);
car.run();

car.moved = 1000;
console.log(car.moved);
car.run();