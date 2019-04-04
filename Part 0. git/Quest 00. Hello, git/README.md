# Quest 00. Hello, git


## Introduction
* git은 2018년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`
  * `git add`
  * `git commit`
  * `git push`
  * `git pull`
  * `git branch`
  * `git stash`
* GitHub

## Resources
* [git, 분산 버전 관리 시스템](http://www.yes24.com/24/goods/3676100?scode=032&OzSrank=1), 인사이트
* [GitHub 사용 설명서](http://www.yes24.com/24/Goods/17638082?Acode=101), 교학사
* https://try.github.io
* http://pcottle.github.io/learnGitBranching

## Checklist
* 버전 관리 시스템은 왜 필요한가요?
  > 코드 관리, 변경 이력 확인, 코드 백업 및 특정 시점으로의 복구, 여러 명의 개발 협업을 위해 필요합니다.  
* git 외의 버전관리 시스템에는 무엇이 있나요? git은 그 시스템과 어떤 점이 다르며, 어떤 장점을 가지고 있나요?
  > 중앙집중식 버전관리 시스템인 CVS, Subversion.  
  > 버전관리되는 모든 파일을 저장하는 하나의 서버와 서버에서 파일을 가져오는 다수의 클라이언트가 존재합니다.  
  > git은 분산 버전관리 시스템으로 클라이언트가 파일들의 마지막 스냅샷을 가져오는(중앙집중식 버전관리) 대신 저장소를 통째로 복사합니다.  
  > 중앙 서버에 문제가 생기면 모든 것이 잘못되는 중앙집중식 버전관리와 다르게 서버에 문제가 생겨도 클라이언트에 복사된 저장소를 다시 서버로 복사해서 서버 복구가 가능합니다.  
* git의 `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
  > `git clone [url]` : 원격 서버의 저장소를 로컬에 복사해오는 명령어  
  > `git add [파일 이름]` : 파일을 새로 추적하거나 수정한 파일을 staged 상태로 만들 때 사용  
  > `git commit` : 변경된 내용을 로컬 저장소에 저장  
  > `git push origin master` : 커밋한 내용을 원격 저장소에 올릴 때 사용  
  > `git pull` : 로컬 저장소를 원격 저장소에 맞춰 갱신할 떄 사용  
  > `git branch [브랜치 이름]` : 새로운 브랜치를 만들 때 사용  
  > `git stash` : 변경된 내용이 있을 경우 내용을 스택에 잠시 저장했다가 나중에 다시 사용(`git stash apply`)  
  
## Quest
* github에 가입한 뒤, [이 커리큘럼의 github 저장소](https://github.com/KnowRe/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* [GitHub Desktop](https://desktop.github.com/)을 다운받아 설치합니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.
