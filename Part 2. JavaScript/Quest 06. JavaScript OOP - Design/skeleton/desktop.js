class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( iconList, target ) {}

  // 전달받은 아이콘 목록으로 객체 및 화면 구성.
  makeIconList() {}
};

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( name, imgSRC, target ) {}

  initialize() {}
  set name( name ) {}
  get name() {}
  set imgSRC( imgSRC ) {}
  get imgSRC() {}
  set target( target ) {}
  get target() {}
  setMoveEvent() {}
};

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( name, imgSRC, iconList, target ) {}

  initialize() {}
  set name( name ) {}
  get name() {}
  set imgSRC( imgSRC ) {}
  get imgSRC() {}
  set target( target ) {}
  get target() {}
  setMoveEvent() {}
  setOpenWindow() {}
};

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor( folderName, iconList ) {}

  initialize() {}
  set width( width ) {}
  get width() {}
  set height( height ) {}
  get height() {}
  setMoveEvent() {}
  setCloseWindow() {}
};
