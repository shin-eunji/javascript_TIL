// null 과 undefined
// 두 타입은 모두 자바스크립트에서 '값이 비어있음'이라고 나타냄.

// undefined (초기화) : 기본적으로 값이 할당되지 않은 변수 / undefined타입의 변수 자체의 값 또한 undefined임. => 타입이자 값을 나타냄.
var foo; // 변수 선언 시, 초기화가 되기 떄문에 undeifined가 나오며, 값이 할당되지 않았음.

// null(값이 비어있음 없음) : 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용. / null타입의 typeof값은 object임.
var nullVar = null;

console.log(typeof nullVar === null); // false  (object === null 당연히 값과 타입이 다르기 때문에)
console.log(nullVar === null); // true (null === null 은 같음.)
