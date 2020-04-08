// 클로저의 메모리 관리
// return에 의한 클로저의 메모리 해제
let outer = (function () {
  let  a = 1;
  let inner = function() {
    return ++a;
  };
  return inner;
})();

console.log(outer());
console.log(outer());
outer = null;

// setInteraval에 의한 클로저의 메모리 해제
(function() {
  let a = 0;
  let intervalId = null;
  let inner = function() {
    if(++a >= 10) {
      clearInterval(intervalId);
      inner = null;
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

// eventListener에 의한 클로저의 메모리 해제
(function () {
  let count = 0;
  let button = document.createElement('button');
  button.innerText = 'click';

  let clickHandler = function() {
    console.log(++count, 'times clicked');
    if(count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null;
    }
  };
  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();