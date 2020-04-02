// while 문
var word = '홍길동';

while(true) {
  var newWord = prompt(word);

  if(word[word.length -1] === newWord[0]) {
    word = newWord;
    alert('딩동댕')
  } else {
    alert('틀렸습니다.');
  }
}

// for 문
