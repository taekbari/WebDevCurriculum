# Quest 10. Hello, node.js


## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* 꼭 알아야 하는 것들
  * node.js
  * npm
  * `require()` 함수
  * module.exports

## Resources
* [Node.js 노드제이에스 프로그래밍](http://www.yes24.com/24/Goods/6271069?Acode=101), 에이콘출판사
* [모던 웹을 위한 Node.js 프로그래밍](http://www.yes24.com/24/Goods/10991708?Acode=101), 한빛미디어

## Checklist
* node.js는 어떤 식으로 동작하나요?
  * `require()` 함수는 어떻게 쓰는 것인가요?
    * 매개변수로 전달받은 이름 또는 경로의 모듈, JSON 그리고 로컬파일을 가져오는 함수.
    * npm으로 설치한 모듈들은 모듈 이름으로 가져오는 것이 가능하고 사용자 정의 모듈이나 로컬 파일들은 상대경로를 통해서 가져온다.
  * `module.exports`와 `exports` 변수는 어떻게 다른가요?
    * `module.exports` : `require()`함수를 호출했을 때 반환되는 객체 참조값으로 node.js에서 자동으로 생성한다. 기본값으로 빈 객체가 설정된다.
    * `exports`: `module.exports`와 동일한 객체를 참조하고 있지만, `require()` 함수를 통해 반환되는 값은 `module.exports`이다.
* npm이 무엇인가요?
  * node로 만들어진 모듈을 관리해주는 툴.
  * node로 만들어진 모듈을 웹에서 받아서 설치하고 관리.

  * npm 패키지를 `-g` 옵션을 통해 Global로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?
    * `-g` 옵션 사용 : 전역에 패키지가 설치되게 되고 전역에서 참조가 가능. 공통으로 사용하는 패키지의 경우 전역으로 설치해서 사용 가능.
    * `-g` 옵션을 사용하지 않을 경우, 지역적으로 패키지가 설치되며, 설치된 패키지는 해당 프로젝트에서만 사용이 가능.

## Quest
* node.js를 PC에 설치해 보세요. 버전은 LTS라고 써 있는 버전이 적당합니다.
* 커맨드 라인에서 다음과 같은 명령을 쳤을 때 위 파일들의 내용이 나타나도록 해 보세요.
  * `$ node app.js 1`
    * `{ name: 'Config1', var1: 'aaa', var2: [ 1, 2, 3, 4 ] }`
  * `$ node app.js 2`
    * `{ name: 'Config2', var1: 'bbb', var2: [ 2, 3, 4, 5 ] }`
* 단, 주어진 스켈레톤 코드에서 app.js는 변경할 수 없으며, 새로운 파일을 추가해야 합니다.
