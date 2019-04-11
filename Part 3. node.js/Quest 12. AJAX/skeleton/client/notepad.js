class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	constructor( target ) {
		this.target = target;
		this.fileTab = new FileTab();

		this.makeNotepad();
	}

	makeNotepad() {

	}

	setNewFileEvent() {
		document.querySelector( '.new-file-button' ).addEventListener('click', ( event ) => {
			this.fileTab.addFileTab({
				name: '',
				contents: ''
			});

			event.preventDefault();
		});
	}
};

class FileTab {
	constructor() {
		this.fileTabMenu = document.querySelector( '.file-tab-menu' );
		this.newFileCount = 1;
		this.fileList = [ {name: '', contents: ''} ];

		// this.editor = new Editor();
		this.initialize();
	}

	initialize() {
		this.fileTabMenu.insertAdjacentHTML( 'beforeend', '<li class="file-tab selected"><a href="#">New File 1</a></li>' );
	}

	addFileTab( fileInfo ) {
		this.fileList.push( fileInfo );
		this.newFileCount = this.newFileCount + 1;
		
		this.fileTabMenu.insertAdjacentHTML( 'beforeend', '<li class="file-tab selected"><a href="#">New File 1</a></li>' );
	}

	setCompleteEvent() {
		
	}
}

class Editor {
	constructor( fileName, fileContents ) {
		this._fileName = fileName || '';
		this._fileContents = fileContents || '';
		this.inputName = document.querySelector( '.file-contents .input-name');
		this.inputContents = document.querySelector( '.file-contents .input-contents');

		this.initialize();
	}

	get fileName() {
		return this._fileName;
	}

	get fileContents() {
		return this._fileContents;
	}

	initialize() {
		if ( fileName ) {
			this.inputName.innerHTML = fileName;
		}
		else {
			
		}

		this.inputContents.innerHTML = fileContents;
		this.setInputEvent();
	}

	setInputEvent() {
		document.querySelector( '.file-contents .input-name').addEventListener('keyup', ( event ) => {
			this._fileName = event.currentTarget.value;
		});

		document.querySelector( '.file-contents .input-contents').addEventListener('keyup', ( event ) => {
			this._fileContents = event.currentTarget.value;
		});
	}
}
