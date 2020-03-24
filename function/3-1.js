function add (a, b) // 함수 호출

// 클래스
// 함수: 함수 특정 기능을 하는 구문(알고리즘, 로직)을 묶을 때, 재사용하기 위해 사용하는 문법
// 클래스: 연관 있는 변수와 함수를 하나로 묶을 때, 재사용할 때 사용하는 문법

// 클래스 사용하는 ui요소
// - 2단 메뉴
// - 이미지 슬라이더
// - 탭 패널
// - 아코디언 메뉴
// - 롤링 배너


var $selectMainMenu = null;
var aryMainMenuData = [
  {
    title: 'main1',
    link: 'http://',
    sub: ['m1_sub1', 'm1_sub2', 'm1_sub3']
  }, {
    title: 'main2',
    link: 'http://',
    sub: ['m2_sub1', 'm2_sub2', 'm2_sub3']
  }
];

var $selectTabMenu = null;
var aryTabMenuData = [
  {
    title: 'main1',
    link: 'http://'
  }, {
    title: 'main2',
    link: 'http://'
  }
];
function mainMenu() {}
function selectMainMenu() {}
function tabMenu() {}
function selectTabMenu() {}

var $selectAccordionMenu = null;
var aryAccrodionMenuData = [
  {
    title: 'main1',
    link: 'http://'
  },
  {
    title: 'main2',
    link: 'http://'
  }
];

var aryImageData = [
  {
    url: 'img1.jpg',
    link: 'http://'
  }, 
  {
    url: 'img2.jpg',
    link: 'http://'
  },
  {
    url: 'img3.jpg',
    link: 'http://'
  }
]

function accordionMenu() {}
function selectAccordionMenu() {}
function imagSlider() {}
function autoImageSlider() {}

// 함수 기반 코딩 단점: 코드가 구분 없이 작성돼 있기 때문에 무누제 발생 시 모래밭에서 잃어버린 진주를 찾느 ㄴ것처럼 문제 발생 코드를 쉽게 찾을 수 없습니다.
// 큰 프로젝트느느 여러 사라이 협업을 이뤄 진행하ㅔ 되는데 이때 개발자들끼리 똑같은 이름을 가진 변수와 함수를 만들면 충돌하는 문제점이 발생.

function Calculater() {
  this.add = function(a,b) {
    alert('두 수의 합은 ' + (a + b) + '입니다.');
  }
}

// 개념 정리
// 인스턴스 생성: 함수를 사용하기 위해 함수 호출을 해줘야 하듯 클래스를 사용하려면 new라는 키워드를 사용
// 인스턴스도 객체가 됨.
// 프로퍼티: 일반 변수, 함수를 클래스 내부에 들어 있는 변수, 함수와 구분하기 위해 클래스 내부에 있는 변수
// 메서드: 일반 변수, 함수를 클래스 내부에 들어 있는 변수, 함수와 구분하기 위해 클래스 내부에 있는 함수 

// 클래스 내부에 들어 있는 함수 메서드를 호출하는 방법
// 접근 연산자인 점을 사용. (인스턴스.프로퍼티 / 인스턴스.메서드())

// 클래스 외부에서 클래스 내부의 변수(프로퍼티)와 함수(메서드)를 마음대로 접근할 수 없음.

// 단계 1
// 인스턴스 만들기: new라는 키워드인 생성자 함수를 이용해 인스턴스를 만들어야함.
var cal1 = new Calculater();

// 단계 2
// 접근 연산자를 이용한 함수 호출
// 접근 연산자를 이용해 원하는 기능인 add()함수에 접근해서 호출
var cal1 = new Calculater();
cal1.add(10,20);
