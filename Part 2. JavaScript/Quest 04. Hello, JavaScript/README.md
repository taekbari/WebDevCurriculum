# Quest 04. Hello, JavaScript


## Introduction
* 이번 퀘스트에서는 자바스크립트의 기본적인 문법에 대해 알아볼 예정입니다.

## Topics
* 기본적인 자바스크립트 문법
  * 원시 데이터 타입과 연산자
  * `let`과 `const`
  * `if`
  * `for`
  * `function` 혹은 `() => { }`

## Resources
* [자바스크립트 완벽 가이드](http://www.yes24.com/24/Goods/8275120?Acode=101), 인사이트
* [자바스크립트 객체지향 프로그래밍](http://www.yes24.com/24/Goods/7276246?Acode=101), 위키북스

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
    > 자바스크립트를 이루는 표준 코어 스크립트 언어를 말합니다.  
* 웹 브라우저의 자바스크립트 콘솔은 어떻게 사용할까요?
  > 웹 페이지에 대한 정보를(개발자가 작성한 정보 또는 페이지에서 전달해주는 정보) 확인 또는 자바스크립트를 실행하기 위해서 사용합니다.  
  * 웹 브라우저(Chrome)에서 자바스크립트 콘솔을 띄우는 단축키는 무엇인가요?
    > `command + option + j` (Mac), `control + shift + j` (Windows, Linux)  
* `let`를 이용하여 변수를 선언하는 것과 `const`를 이용하여 변수를 선언하는 것은 어떻게 다를까요?
  > `let`을 사용할 경우 선언한 변수의 재할당이 가능하지만 `const`를 사용할 경우에는 재할당이 불가능합니다.  
  > `const`를 사용하여 객체 또는 배열을 할당할 경우 재할당은 불가능하지만 변수 내부 변경은 가능합니다.  
  > `const`를 사용하여 변수를 생성할 경우에는 선언과 할당이 한번에 이루어져야합니다.  
  * `var`를 이용하여 선언하는 방법은 어떻게 다를까요?
    > `var`로 선언한 변수는 `function-scoped`를 갖고 `let`와 `const`를 사용해 선언한 변수는 `block-scoped`를 갖습니다.  
    > `var`로 선언한 변수는 호이스팅으로 인해 선언되기 이전에 접근해도 에러가 발생하지 않습니다.  
    > 변수 재선언이 가능합니다.
* 자바스크립트의 익명 함수는 무엇인가요?
  >  이름이 없는 함수를 말하며 콜백함수, 즉시실행함수, 클로저를 만들 때 익명 함수를 사용할 수 있습니다.  
  * 자바스크립트의 Arrow function은 무엇일까요?
    > function 키워드 대신 화살표를 사용하여 간략한 방법으로 익명 함수를 선언할 수 있습니다.  
    > 기존의 익명 함수에서는 함수의 호출 방식에 따라 this에 바인딩할 객체가 동적으로 결정되지만 Arrow function은 언제나 상위 스코프의 this를 가리키는 차이점이 있습니다.  

## Quest
* 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 모두 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을 것 같습니다.
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* 워밍업을 위한 퀘스트이므로 Skeleton code는 없습니다!

## Quest Result
```Javascript
(() => {
  const starLine = parseInt( window.prompt('라인 수를 입력하세요.', 0), 10 );
  let resultString = '';

  for ( let index = 0; index < starLine; index++ ) {
    const starCount = index * 2 + 1;
    const emptyCount = starLine - (index + 1);

    for ( let printIndex = 0; printIndex < starCount + emptyCount; printIndex++ ) {
      if ( printIndex < emptyCount ) {
        resultString = resultString + ' ';
      }
      else {
        resultString = resultString + '*';
      }
    }

    resultString = resultString + '\n';
  }

  console.log( resultString );
})();
```