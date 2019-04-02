const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	// TODO: 이 곳을 채워넣으세요..!
	let responseData = 'Hello';
	const urlData = url.parse( req.url, true );

	res.writeHeader(200, {'Content-type': 'text/html'});
	if ( urlData.pathname === '/' ) {
		responseData = responseData + ' World!';
	}
	else if ( urlData.pathname === '/foo' ) {
		if ( req.method === 'GET' && urlData.query.bar ) {
			responseData = `${responseData} ${urlData.query.bar}`;
			res.write( responseData );
			res.end();
		}

		if ( req.method === 'POST' ) {
			let requestBody = [];
			req.on('data', (chunk) => {
				requestBody.push( chunk );
			}).on('end', () => {
				requestBody = Buffer.concat(requestBody).toString();
				
				const queryList = requestBody.split( '&' );
				for ( let index = 0; index < queryList.length; index++ ) {
					const splitedQuery = queryList[index].split( '=' );
					if ( splitedQuery[0] === 'bar' ) {
						responseData = `${responseData} ${splitedQuery[1]}`;
						break;
					}
				}

				res.write( responseData );
				res.end();
			});
		}
	}
}).listen(8080);
