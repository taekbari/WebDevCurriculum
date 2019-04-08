# Quest 05. Playing with DOM


## Introduction
* 이번 퀘스트에서는 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* Closure

## Resources
* [자바스크립트 완벽 가이드](http://www.yes24.com/24/Goods/8275120?Acode=101), 인사이트
* [자바스크립트 객체지향 프로그래밍](http://www.yes24.com/24/Goods/7276246?Acode=101), 위키북스

## Checklist
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  > DOMElement의 속성인 classList의 메소드인 add & remove 함수를 사용해서 CSS Class를 추가하거나 삭제합니다.  
  > `Element.classList.add()`, `Element.classList.remove()`  
  > add & remove 함수를 지원하지 않는 브라우저에서는 classList 값에 추가하려는 class 문자를 추가 또는 class 문자를 빈문자로 대체합니다.  
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    > className 속성값 또는 getAttriute 함수를 사용해서 class 속성값을 가져와서 추가하려는 class 문자를 추가 또는 class 문자를 빈문자로 대체함으로써 제거합니다.  
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  > 전역에서 변수가 선언되면 전역 스코프를 갖고 이 변수는 코드 어디서든지 참조할 수 있습니다.  
  > 지역(함수 영역, 블록 영역)에서 변수가 선언되면 지역 스코프를 갖고 이 변수는 선언된 영역과 그 영역의 하위 영역에서만 참조할 수 있습니다.  
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
    > `var`로 선언한 변수는 `function-scoped`를 갖고 `let`으로 선언한 변수는 `block-scoped`를 갖습니다.  
    > `var`로 선언한 변수는 재선언이 가능하지만 `let`으로 선언한 변수는 재선언시 에러가 발생합니다.  
    > `var`로 선언한 변수는 호이스팅 현상으로 인해 선언되지 이전에 접근하여도 에러가 발생하지 않지만, `let`으로 선언한 변수에서는 에러가 발생합니다.  

## Quest
* Skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.
