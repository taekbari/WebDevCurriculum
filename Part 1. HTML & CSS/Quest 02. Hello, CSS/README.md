# Quest 02. Hello, CSS


## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS 기초 문법
* CSS를 HTML에 적용하는 세 가지 방법
  * Inline Style
  * `<style>`
  * `<link rel="stylesheet" href="...">`
* 레이아웃을 위해 몇 가지 중요한 속성들
  * `position`
  * `left`/`top`
  * `display`
  * `width`/`height`
  * `display: flex;`
  * `display: grid;`
  * CSS Box Model
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [모던 웹 디자인을 위한 HTML5+CSS3 입문](http://www.yes24.com/24/Goods/15683538?Acode=101), 한빛미디어
* [웹 디자인 2.0 고급 CSS](http://www.yes24.com/24/Goods/2808075?Acode=101), 에이콘출판사
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법의 장단점은 무엇인가요?
  > inline style  
  > * 특정 요소에만 스타일을 적용할 수 있습니다.  
  > * 직관적으로 알아보기 용이합니다.  
  > * 해당 요소 외에는 재사용이 불가능합니다.
  > * HTML 코드와 CSS 코드가 함께 있어서 코드 가독성이 떨어집니다.  
  >
  > `<style>`  
  > * 현재 문서에만 스타일을 적용할 수 있습니다.  
  > * 다른 페이지에서는 재사용이 불가능합니다.  
  > * 페이지를 로드할 때마다 스타일 코드를 받아와야 합니다.  
  >
  > `<link rel="stylesheet" href="...">`  
  > * 하나의 파일로 스타일을 관리하기 때문에 유지보수에 용이합니다.  
  > * CSS 파일이 캐시에 저장되므로 재방문시의 로딩속도가 빠릅니다.  
  > * 추가적인 파일 요청이 필요하게 되므로 request가 발생합니다.  
  > * 여러 CSS 파일이 링크가 포함되면 중복 선언이 발생할 수 있습니다.   
* 여러 개의 CSS 규칙이 한 개의 대상에 적용될 때, 어떤 규칙이 우선순위를 가지게 되나요?
  > * 속성 값 뒤에 `!important`를 붙인 속성  
  > * inline style  
  > * 선택자 우선순위를 계산하여 높은 값을 갖는 속성  
  > `#id`로 지정한 속성(100점) > `.class` 또는 `:가상 클래스`로 지정한 속성(10점) > `태그 이름`로 지정한 속성(1점)  
  > * 선택자 우선순위가 같다면 가장 마지막에 선언된 속성  
* 어떤 박스가 `position: absolute;`인 속성을 갖는다면, 그 위치의 기준점은 어디가 되나요?
  > `position: absolute;` 속성을 갖는 요소의 상위 요소들 중 `position: static` 속성이 아닌 값을 갖는 요소를 기준점으로 설정합니다.  
* 가로나 세로로 여러 개의 박스가 공간을 채우되, 그 중 한 개의 박스만 가변적인 크기를 가지고 나머지 박스는 고정된 크기를 갖게 하려면 어떻게 해야 할까요?
  > * `float`와 `margin` 속성을 사용  
  > * `float`와 `calc`함수 사용  
  > * `display: table`와 `display: table-cell` 속성을 사용  
  > * `position` 속성을 사용  
  > * `display: flex`와 `flex-basis` 속성을 사용  
  > * `display: grid`와 `grid-template-columns` 또는 `grid-template-rows` 속성을 사용  
* `float` 속성은 왜 좋지 않을까요?
  >`float` 속성이 적용된 요소는 레이아웃 흐름에서 벗어나기 때문에, 요소의 영역을 잡아주기 위한 추가적인 작업이 필요합니다.  
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
  > Flexbox가 가로 또는 세로 하나의 축을 기준으로 요소를 배열하는 개념인 반면, CSS Grid는 가로와 세로 2개의 축을 기준으로 요소들을 배치한다는 차이가 있습니다.  
  > Flexbox는 요소의 상하좌우 정렬, 순서 변경 그리고 요소 간격 조절이 간단하다는 장점이 있습니다.  
  > CSS Grid는 페이지의 전체적인 레이아웃을 구성하는데 간단하다는 장점이 있습니다.  
  > Flexbox와 CSS Grid 모두 비교적 최신 브라우저가 아니면 벤더 프리픽스를 사용해야한다는 단점이 있습니다.  

## Quest
* 아래의 그림들은 모두 전체적으로 창의 크기에 꽉 차야 하며, 창의 크기가 일정 크기 이상일 경우 전체 창 크기가 어떻게 바뀌되더라도 그림에 맞게 각 박스의 크기가 조절되어야 합니다.
* **주의사항**
  * HTML 파일은 수정하면 안됩니다.
  * `float` 속성과 `calc()`함수를 사용하지 않고 해 보세요!
* [이 그림](layout1.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout1.html` 파일에 링크된 `skeletons/layout1.css` 파일을 수정하면 됩니다.
* [이 그림](layout2.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout2.html` 파일에 링크된 `skeletons/layout2.css` 파일을 수정하면 됩니다.
* [이 그림](layout3.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout3.html` 파일에 링크된 `skeletons/layout3.css` 파일을 수정하면 됩니다.
* 위의 세 번째 그림을 Flexbox를 써서 구현해 보세요. `skeletons/layout4.html` 파일에 링크된 `skeletons/layout4.css` 파일을 수정하면 됩니다.
* 위의 세 번째 그림을 CSS Grid를 써서 구현해 보세요. `skeletons/layout5.html` 파일에 링크된 `skeletons/layout5.css` 파일을 수정하면 됩니다.
