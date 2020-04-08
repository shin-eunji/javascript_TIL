// return 없이도 클로저가 발생하는 다양한 경우
(function () {
  let a = 0;
  let intervalId = null;
  let inner = function() {
    if(++a >= 10) {
      clearInterval(intervalId);
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

(function() {
  let count = 0;
  let button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function() {
    console.log(++count, 'time clicked');
  });
  document.body.appendChild(button);
})();