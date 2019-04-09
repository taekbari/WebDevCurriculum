class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor( templateTarget, iconList ) {
		this.iconList = iconList || [];
		this.templateTarget = templateTarget;

		this.makeIconList();
	}

	makeIconList() {
		const targetElement = document.querySelector( this.templateTarget );
		this.iconList.forEach(icon => {
			targetElement.appendChild( icon.htmlElement );
		});
	}
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor( templateTarget, name, imgInfo ) {
		this._htmlElement = document.querySelector( templateTarget ).cloneNode( true );
		this._name = name || 'Test Text';
		this._imgInfo = imgInfo || { src: './svg/icon_text.svg', width: 80, height: 80 };

		this.initialize();
	}

	set name( name ) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set imgInfo( imgInfo ) {
		this._imgInfo = imgInfo;
	}

	get imgInfo() {
		return this._imgInfo;
	}

	get htmlElement() {
		return this._htmlElement;
	}

	initialize() {
		if ( !this._htmlElement ) {
			return;
		}

		this._htmlElement.querySelector( '.name' ).innerHTML = this._name;
		this._htmlElement.classList.remove( 'template' );

		this.setIconMoveEvent();
	}

	setIconMoveEvent() {
		this._htmlElement.addEventListener('mousedown', ( event ) => {
			const clickedOffsetX = event.offsetX;
			const clickedOffsetY = event.offsetY;

			document.onmousemove = ( event ) => {
				this._htmlElement.style.position = 'absolute';
				this._htmlElement.style.top = `${event.clientY - clickedOffsetY}px`;
				this._htmlElement.style.left = `${event.clientX - clickedOffsetX}px`;
			};
			
			document.onmouseup = () => {
				document.onmousemove = null;
				document.onmouseup = null;
			};
			
			event.preventDefault();
		});
	}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor( templateTarget, name, imgInfo, iconList ) {
		this._htmlElement = document.querySelector( templateTarget ).cloneNode( true );
		this._name = name || 'Test Folder';
		this._imgInfo = imgInfo || { src: './svg/icon_folder.svg', width: 80, height: 80 };
		this.iconList = iconList || [];

		this.initialize();
	}

	set name( name ) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set imgInfo( imgInfo ) {
		this._imgInfo = imgInfo;
	}

	get imgInfo() {
		return this._imgInfo;
	}

	get htmlElement() {
		return this._htmlElement;
	}

	initialize() {
		if ( !this._htmlElement ) {
			return;
		}

		this._htmlElement.querySelector( '.name' ).innerHTML = this._name;
		this._htmlElement.classList.remove( 'template' );

		this.setFolderMoveEvent();
		this.setWindowOpenEvent();
	}

	updateHTMLElement() {

	}

	setFolderMoveEvent() {
		this._htmlElement.addEventListener('mousedown', ( event ) => {
			const clickedOffsetX = event.offsetX;
			const clickedOffsetY = event.offsetY;

			document.onmousemove = ( event ) => {
				this._htmlElement.style.position = 'absolute';
				this._htmlElement.style.top = `${event.clientY - clickedOffsetY}px`;
				this._htmlElement.style.left = `${event.clientX - clickedOffsetX}px`;
			};
			
			document.onmouseup = () => {
				document.onmousemove = null;
				document.onmouseup = null;
			};
			
			event.preventDefault();
		});
	}

	setWindowOpenEvent() {
		this._htmlElement.addEventListener('dblclick', () => {
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
