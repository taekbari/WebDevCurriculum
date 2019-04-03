# Quest 11. My little web server


## Introduction
* 이번 퀘스트에서는 간단한 웹서버를 만들어 보겠습니다.

## Topics
* GET/POST
* node.js `http` module
  * `req`와 `res` 객체

## Resources
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

## Checklist
* HTTP의 GET과 POST 메소드는 어떻게 다른가요?
  * GET
    * 서버에 데이터를 요청할 때 사용하는 메소드
    * 전달하려는 데이터는 헤더에 포함되며 URL에 key & value 쌍으로 표현되고 구분자로 '&'를 사용
    * body에 포함되는 데이터는 없음
    * 길이 제한이 있으며 캐시될 수 있음
  * POST
    * 서버에 데이터 전송을 요청할 때 사용하는 메소드
    * body에 데이터를 포함해서 전송
    * body에 포함되는 데이터를 설명하기 위해 `Content-Type` 값이 헤더에 포함
    * 보내는 데이터의 길이 제한이 없음
  * 다른 HTTP 메소드에는 무엇이 있나요?
    * PUT : 서버에 데이터 전송을 요청할 때 사용하는 메소드(생성, 수정)으로 한번 또는 연속적으로 호출하더라도 동일한 결과를 갖음
    * HEAD : GET 메소드로 요청하는 경우에 어떤 헤더들이 반환되는지를 요청하는 메소드
    * DELETE : 서버에 특정 데이터 삭제를 요청할 때 사용하는 메소드
    * PATCH : 요청된 자원을 수정하기 위해 사용하는 메소드로 PUT과 유사하지만, PATCH는 해당자원의 일부수정을 위해 사용
    * OPTIONS : 타겟 리소스와 통신하기 위한 옵션으로 사용
* HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
  * HTTP 요청의 `Content-Type` 헤더는 무엇인가요?
    * 요청에 포함해서 보내는 데이터의 유형 정보를 표현
  * Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?
    * `form-data` : 서버로 HTML form 형식으로 내용을 전송할 때 사용
    * `x-www-form-urlencoded` : URL parameter 형식으로 내용을 전송할 때 사용
    * `raw` : 어떤 형식이든 입력된 내용을 전송할 때 사용(text, json, html...)
    * `binary` : 파일 형식의 데이터를 전송할 때 사용

## Quest
* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력하는 서버를 만들어 보세요.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력하는 서버를 만들어 보세요.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 POST 메소드로 보내면, `Hello, [문자열]`을 출력하는 서버를 만들어 보세요.
* expressJS와 같은 외부 프레임워크를 사용하지 않고 만들어 보세요.
