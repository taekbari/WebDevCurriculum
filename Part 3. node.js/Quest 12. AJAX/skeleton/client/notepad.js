class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	constructor( target ) {
		this.notepadElement = document.querySelector( target );
		this.fileTab = new FileTab( this.notepadElement );

		this.setNewFileEvent();
		this.setFileListEvent();
	}

	setNewFileEvent() {
		this.notepadElement.querySelector( '.new-file-button' ).addEventListener('click', ( event ) => {
			this.fileTab.addFileTab({
				name: '',
				contents: '',
				isNewFile: true
			});

			event.preventDefault();
		});
	}

	setFileListEvent() {
		this.notepadElement.querySelector( '.file-list-button' ).addEventListener('click', ( event ) => {
			fetch('/files', { method: 'GET' })
			.then(( response ) => {
				if ( response.status === 200 ) {
					return response.json();
				}
			})
			.then(( responseData ) => {
				const fileList = responseData.list.map(( fileName ) => {
					return `
						<a class="icon">
							<img src="./svg/icon_text.svg" alt="icon" />
							<p class="name">${fileName}</p>
						</a>
					`;
				});
				const windowHTML = `
					<div class="window">
						<p class="title">select file</p>
						<section class="icon-list">
							${ fileList.join('') }
						</section>
						<button class="window-close-button">X</button>
					</div>
				`;

				document.body.classList.add( 'open' );
				document.body.insertAdjacentHTML( 'beforeend', windowHTML );
				document.querySelectorAll( '.window .icon' ).forEach(( icon ) => {
					icon.addEventListener( 'dblclick', this.selectFile.bind(this) );
				});

				document.querySelector( '.window-close-button' ).addEventListener('click', ( event ) => {
					document.body.classList.remove( 'open' );
					document.body.removeChild( event.currentTarget.parentElement );
					event.preventDefault();
				});
			})
			.catch(( error ) => {
				window.alert( 'Fail to load file list.' );
				console.log( 'error : ', error );
			});

			event.preventDefault();
		});
	}

	selectFile( event ) {
		const selectedFile = event.currentTarget.querySelector( '.name' ).innerHTML;

		fetch(`/files/${selectedFile}`, {method: 'GET'})
		.then(( response ) => {
			if ( response.status === 200 ) {
				return response.text();
			}
		})
		.then(( responseData ) => {
			this.fileTab.addFileTab({
				name: selectedFile,
				contents: responseData,
				isNewFile: false
			});
		})
		.catch(( error ) => {
			window.alert( 'Fail to load selected file.' );
			console.log( 'error : ', error );
		})
		.then(() => {
			document.body.classList.remove( 'open' );
			document.body.removeChild( document.querySelector('.window') );
		});

		event.preventDefault();
	}
};

class FileTab {
	constructor( notepadElement ) {
		this.notepadElement = notepadElement;
		this.fileTabMenu = notepadElement.querySelector( '.file-tab-menu' );
		this.newFileCount = 1;
		this.selectedTabIndex = 0;
		this.fileList = [ {name: '', contents: '', isNewFile: true} ];
		this.editor = new Editor( notepadElement );

		this.initialize();
	}

	initialize() {
		this.fileTabMenu.insertAdjacentHTML('beforeend',  `
			<li class="file-tab selected" data-index="${this.fileList.length - 1}">
				<a href="#">New File 1</a>
			</li>
		`);

		this.notepadElement.querySelector( '.complete-button' ).addEventListener( 'click', this.saveOrUpdateFile.bind(this) );

		this.setChangeTabEvent();
		this.setCompleteButtonText();
	}

	setChangeTabEvent() {
		const selectedTab = this.fileTabMenu.querySelector(`.file-tab[data-index="${this.selectedTabIndex}"] a`);
		
		selectedTab.addEventListener('click', ( event ) => {
			const currentTabIndex = parseInt( event.currentTarget.parentElement.getAttribute('data-index'), 10 );
			if ( this.selectedTabIndex === currentTabIndex ) {
				return;
			}

			this.changeFileInfo( currentTabIndex, this.fileList[currentTabIndex] );
			this.setCompleteButtonText();
			event.currentTarget.parentElement.classList.add( 'selected' );
			
			event.preventDefault();
		});
	}

	setCompleteButtonText() {
		const completeButton = this.notepadElement.querySelector( '.complete-button' );
		if ( this.fileList[this.selectedTabIndex].isNewFile ) {
			completeButton.innerHTML = 'Save';
		}
		else {
			completeButton.innerHTML = 'Update';
		}
	}

	saveOrUpdateFile() {
		const formData = new FormData();
		const method = this.fileList[this.selectedTabIndex].isNewFile ? 'POST' : 'PUT';
		const changeType = this.fileList[this.selectedTabIndex].isNewFile ? 'Save' : 'Update';

		formData.append( 'name', this.editor.fileName );
		formData.append( 'contents', this.editor.fileContents );

		fetch('/files', {
			method,
			body: formData
		}).then(( response ) => {
			if ( response.status === 200 ) {
				return response.json();
			}
		}).then(( responseData ) => {
			this.fileList[this.selectedTabIndex] = Object.assign( responseData, {isNewFile: false} );
			this.editor.fileName = responseData.name;
			this.editor.fileContents = responseData.contents;
			this.editor.isNewFile = false;

			this.fileTabMenu.querySelector(`.file-tab[data-index="${this.selectedTabIndex}"] a`).innerHTML = responseData.name;
			this.setCompleteButtonText();
			this.editor.updateView();

			window.alert( `${changeType} Complete.` );
		}).catch(( error ) => {
			window.alert( `Fail to ${changeType.toLowerCase()} file.` );
			console.log( 'error : ', error );
		});
	}

	addFileTab( fileInfo ) {
		let fileName = '';

		this.fileList.push( fileInfo );
		this.changeFileInfo( this.fileList.length - 1, fileInfo );
		if ( fileInfo.name ) {
			fileName = fileInfo.name;
		}
		else {
			this.newFileCount = this.newFileCount + 1;
			fileName = `New File ${this.newFileCount}`;
		}
		
		this.fileTabMenu.insertAdjacentHTML('beforeend', `
			<li class="file-tab selected" data-index="${this.fileList.length - 1}">
				<a href="#">${fileName}</a>
			</li>
		`);

		this.setChangeTabEvent();
		this.setCompleteButtonText();
	}
	
	changeFileInfo( nextTabIndex, nextFileInfo ) {
		this.fileTabMenu.querySelector( `.file-tab.selected` ).classList.remove( 'selected' );

		this.fileList[this.selectedTabIndex].name = this.editor.fileName;
		this.fileList[this.selectedTabIndex].contents = this.editor.fileContents;
		this.selectedTabIndex = nextTabIndex;
		this.editor.fileName = nextFileInfo.name;
		this.editor.fileContents = nextFileInfo.contents;
		this.editor.isNewFile = nextFileInfo.isNewFile;

		this.editor.updateView();
	}
}

class Editor {
	constructor( notepadElement ) {
		this.notepadElement = notepadElement;
		this._fileName = '';
		this._fileContents = '';
		this._isNewFile = true;
		this.inputName = notepadElement.querySelector( '.file-contents .input-name');
		this.inputContents = notepadElement.querySelector( '.file-contents .input-contents');

		this.initialize();
	}

	set fileName( fileName ) {
		this._fileName = fileName;
		this.notepadElement.querySelector( '.file-contents .input-name').value = fileName;
	}

	get fileName() {
		return this._fileName;
	}

	set fileContents( fileContents ) {
		this._fileContents = fileContents;
		this.notepadElement.querySelector( '.file-contents .input-contents').value = fileContents;
	}

	get fileContents() {
		return this._fileContents;
	}

	set isNewFile( isNewFile ) {
		this._isNewFile = isNewFile;
	}

	initialize() {
		this.inputName.innerHTML = this._fileName;
		this.inputContents.innerHTML = this._fileContents;
		this.setInputEvent();
	}

	setInputEvent() {
		this.inputName.addEventListener('keyup', ( event ) => {
			this._fileName = event.currentTarget.value;
		});

		this.inputContents.addEventListener('keyup', ( event ) => {
			this._fileContents = event.currentTarget.value;
		});
	}

	updateView() {
		if ( this._isNewFile ) {
			this.inputName.classList.remove( 'display-none' );
		}
		else {
			this.inputName.classList.add( 'display-none' );
		}
	}
}
