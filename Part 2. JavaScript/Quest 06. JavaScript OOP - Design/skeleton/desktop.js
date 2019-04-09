class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( iconList, target ) {}

  // 전달받은 아이콘 목록으로 객체 및 화면 구성.
  makeIconList() {}
};

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( templateTarget, name, imgInfo ) {}

  set name( name ) {}
  get name() {}
  set imgInfo( imgInfo ) {}
  get imgInfo() {}

  initialize() {}
  setIconMoveEvent() {}
};

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( templateTarget, name, imgInfo, iconList ) {}

  set name( name ) {}
  get name() {}
  set imgInfo( imgInfo ) {}
  get imgInfo() {}

  initialize() {}
  setFolderMoveEvent() {}
  setWindowOpenEvent() {}
};

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( folderName, iconList ) {}

  set width( width ) {}
  get width() {}
  set height( height ) {}
  get height() {}

  initialize() {}
  setWindowMoveEvent() {}
  setWindowCloseEvent() {}
};
