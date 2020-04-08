// 클로저 활용 사례
// 콜백함수 내부에서 외부 데이터를 사용하고자 할 때
// 이벤트 리스너에 관한 예시
let fruits = ['apple', 'banana', 'peach'];
let $ul = document.createElement('ul');

fruits.forEach(function (fruit) {
  let $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function() {
    alert('you choice is' + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);


// 콜백 함수와 클로저
let fruits = ['apple', 'banana', 'peach'];
let $ul = document.createElement('ul');

let alertFruit = function(fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
  let $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit);
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[2]);

// 콜백함수와 클로저
let fruits = ['apple', 'banana', 'peach'];
let $ul = document.createElement('ul');

let alertFruit = function(fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
  let $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[2]);

// 콜백함수와 클로저
let fruits = ['apple', 'banana', 'peach'];
let $ul = document.createElement('ul');

let alertFruitBuilder = function (fruit) {
  return function() {
    alert('your choice is ' + fruit);
  };
};

fruits.forEach(function (fruit) {
  let $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[2]);