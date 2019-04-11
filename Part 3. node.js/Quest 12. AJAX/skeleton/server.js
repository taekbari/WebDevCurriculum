const express = require('express');
const path = require('path');
const bodyParser = require( 'body-parser' );
const fileSystem = require( 'fs' );
const multer = require( 'multer' );
const upload = multer();
const app = express();

const FILE_PATH = path.join( __dirname, 'files' );

app.use( bodyParser.urlencoded({extended: true}) );
app.use( upload.array() );
app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/foo', (req, res) => {
	res.send( req.query.bar );
});

app.post('/foo', (req, res) => {
	res.send( req.body.bar );
});

app.get('/files', (req, res) => {
	fileSystem.readdir(FILE_PATH, (error, fileList) => {
		if ( error ) {
			res.status( 500 ).send( {status: 500, message: 'internal error', type: 'internal'} );
			return;
		}
		
		res.json( {list: fileList} );
	});
});

app.post('/files', (req, res) => {
	fileSystem.writeFile( `${FILE_PATH}/${req.body.name}`, req.body.contents, 'utf-8', (error) => {
		if ( error ) {
			res.status( 500 ).send( {status: 500, message: 'internal error', type: 'internal'} );
			return;
		}

		res.send( 'upload complete' );
	});
});

app.get('/files/:filename', (req, res) => {
	res.download( `${FILE_PATH}/${req.params.filename}` );
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */

const server = app.listen(8080, () => {
	console.log('Server started!');
});
