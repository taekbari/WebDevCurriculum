# Quest 03. Publishing CSS


## Introduction
* 이번 퀘스트에서는 CSS를 이용해 실제 웹 페이지를 모사해 퍼블리싱하는 것에 도전해볼 예정입니다.

## Topics
* 퍼블리싱을 위해 몇 가지 중요한 속성들
  * `font-*`
  * `text-*`
  * `box-sizing`
  * `:hover`/`:active`

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [모던 웹 디자인을 위한 HTML5+CSS3 입문](http://www.yes24.com/24/Goods/15683538?Acode=101), 한빛미디어
* [웹 디자인 2.0 고급 CSS](http://www.yes24.com/24/Goods/2808075?Acode=101), 에이콘출판사
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Checklist
* CSS 퍼블리싱을 할 때, class와 selector들은 어떤 식으로 정리하는 것이 좋을까요?
  > * class는 CSS 속성과 유사하게 소문자와 하이픈('-')을 사용하여 클래스명을 정의합니다.  
  > * 초기화를 위해 설정한 스타일(폰트, 여백 설정 등)은 상단에, 공통으로 사용되는 스타일 그리고 상태나 기능에 따라 설정한 스타일 순으로 작성합니다.  
  > * selector는 가장 명확한 규칙을 적용합니다.(자손 선택자와 같이 깊은 탐색이 들어가지 않도록 합니다.)  
  > * CSS 속성을 정의할 때 적용 순서를 정해서 작성합니다.(ex. padding -> border -> margin 순서대로 작성)  
  > * CSS 방법론(OOCSS, BEM, SMASS)을 사용해서 class와 selector를 정의합니다.  
  > * Sass와 같은 CSS 전처리기를 사용할 수 있는 경우 페이지 또는 모듈 별로 스타일을 관리합니다.  
  
## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](github.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**
* 등장하는 아이콘은 GitHub에서 만든 [Octicons](https://octicons.github.com/) 그림 파일입니다. 해당 폰트 파일은 링크를 참조하여 쓰시면 됩니다.
