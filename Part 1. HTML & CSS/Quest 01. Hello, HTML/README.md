# Quest 01. Hello, HTML


## Introduction
* HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics
* 브라우저의 역사
  * Mosaic
  * Netscape
  * Internet Explorer
  * Firefox
  * Chrome
  * Safari (for iOS)
  * Edge
* HTML 표준의 역사
  * HTML 4.01
  * XHTML 1.0, XHTML 1.1
  * XHTML 2.0
  * HTML5
    * HTML 5.3
* HTML 문서의 구조
* HTML 문서의 엘리먼트
  * Semantic elements
  * Block-level elements vs Inline elements

## Resources
* [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
* [모던 웹 디자인을 위한 HTML5+CSS3 입문](http://www.yes24.com/24/Goods/15683538?Acode=101), 한빛미디어
* [웹 디자인 2.0 고급 CSS](http://www.yes24.com/24/Goods/2808075?Acode=101), 에이콘출판사
* [StatCounter Global Stats](http://gs.statcounter.com/)

## Checklist
* HTML 4.x 이후의 HTML 표준의 변천사는 어떻게 되나요?
  > * HTML 4.01 : HTML 표준 문서로 이전 버전의 오류 등을 수정하고 일부는 새로운 기능이 추가되었습니다. (스타일 시트, 스크립트, 프레임, 테이블 그리고 폼의 기능)  
  > * XHTML 1.0 : HTML 4.01을 기준으로 XML 규약에 맞도록 재정의된 권고안입니다.  
  > * XHTML 1.1 : XHTML의 모듈화를 목표로 만들어진 권고안입니다.  
  > * XHTML 2.0 : HTML 뿐만 아니라 CSS, DOM, Form, Frames, Event 등 다양한 웹 요소들을 완벽하게 XML로 대체하기 위해 작업한 표준안이지만 호환성의 문제와 HTML5에 의해 중단되었습니다.  
  > * HTML 5 : 차세대 웹 표준으로 기존 텍스트와 하이퍼링크만 표시하던 HTML에서 멀티미디어 등 다양한 어플리케이션까지 표현하고 제공합니다.  
  > * 현제 HTML 5.2가 최신 표준이며 HTML 5.3 버전이 워킹 드레프트 단계에 있습니다.   
* MS와 IE는 왜 역사에 오점을 남기게 되었을까요?
  > 브라우저 점유율 경쟁으로 인한 ActiveX 플러그인과 같은 비표준 기술들의 탑재.  
  > 브라우저 점유율 경쟁에서 넷스케이프를 이긴 후 독점 체제로 접어들면서 파이어폭스가 등장하는 4년 동안 업그레이드가 한번도 없었다는 점.  
* `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
  > `<section>` : 문서 안에서 독립된 영역을 나타내는 요소로 관련있는 내용을 포함합니다.  
  > `<div>` : 스타일을 적용하기 전에는 내용이나 레이아웃에 아무런 영향을 미치지 않는 일반적인 컨테이너 역할을 하는 요소로 시멘틱 요소가 없을 때 사용하는 것이 좋습니다.  
  > `<header>` : 문서나 구분되는 영역(`section`, `article`)의 상단 영역을 나타내는 요소로 제목이나 소개 콘텐츠, 로고나 검색폼과 같은 요소들을 포함할 수 있습니다.  
  > `<footer>` : 문서나 구분되는 영역(`section`, `article`)의 하단 영역을 나타내는 요소로 작성자 정보, 저작권, 관련 링크등의 정보를 포함할 수 있습니다.  
  > `<article>` : 문서, 페이지, 사이트 안에 독립적으로 구분되거나 재사용 가능한 영역을 나타내는 요소로 포럼의 글, 신문의 기사, 블로그 글 등이 포함됩니다.  
* 블럭 레벨 엘리먼트와 인라인 엘리먼트의 차이는 무엇일까요?
  > 블럭 레벨 엘리먼트는 인라인 엘리먼트와 다른 블럭 레벨 엘리먼트를 포함할 수 있지만, 인라인 엘리먼트는 데이터와 다른 인라인 엘리먼트만 포함 할 수 있습니다.  
  > 블럭 레벨 엘리먼트는 새로운 줄에서 시작하지만, 인라인 엘리먼트는 문서 흐름에서 줄바꿈을 강제하지 않습니다.  

## Quest
* [이 그림](github.png)은 github의 웹사이트 레이아웃입니다. 이 레이아웃의 정보를 HTML 문서로 표현해 보세요.
* CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  * [CSS Naked Day](http://meiert.com/en/blog/20150319/css-naked-day/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
* 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
