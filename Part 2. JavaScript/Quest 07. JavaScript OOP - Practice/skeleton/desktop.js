class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor( templateTarget, iconList ) {
		this.iconList = iconList || [];
		this.templateTarget = templateTarget;

		this.makeIconList();
	}

	// 전달받은 아이콘 목록으로 객체 및 화면 구성.
	makeIconList() {
		const targetElement = document.querySelector( this.templateTarget );
		console.log( this.iconList[0].htmlElement );
		// this.iconList.forEach(icon => {
		// 	targetElement.appendChild( icon.htmlElement );
		// });
	}
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
	constructor( templateTarget, name, imgInfo, iconList ) {
		this.htmlElement = document.querySelector( templateTarget );
		this.name = name || 'Test Folder';
		this.imgInfo = imgInfo || { src: './svg/icon_folder.svg', width: 80, height: 80 };
		this.iconList = iconList || [];

		this.initialize();
	}

	set name( name ) {}
	get name() {
		return this.name;
	}
	set imgInfo( imgInfo ) {}
	get imgInfo() {
		return this.imgInfo;
	}

	set htmlElement( htmlElement ) {}
	get htmlElement() {
		return this.htmlElement;
	}

	initialize() {
		// this.setFolderMoveEvent();
	}

	setFolderMoveEvent() {
		this.htmlElement.addEventListener('click', () => {
			console.log( `${this.name} click event` );
		});
	}

	setWindowOpenEvent() {
		this.htmlElement.addEventListener('dblclick', () => {
			console.log( `${this.name} dblclick event` );
		});
	}
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
