const express = require('express');
const path = require('path');
const fileSystem = require( 'fs' );
const app = express();

app.use( express.urlencoded() );
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
	fileSystem.readdir(path.join(__dirname, 'files'), (error, fileList) => {
		if ( error ) {
			res.status( 500 ).send( {status: 500, message: 'internal error', type: 'internal'} );
			return;
		}
		
		res.json( {list: fileList} );
	});
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */

const server = app.listen(8080, () => {
	console.log('Server started!');
});
