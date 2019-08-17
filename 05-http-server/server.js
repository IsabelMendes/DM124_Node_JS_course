const http = require('http');
const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);

const host = process.env.Host || 'localhost';
const port = process.env.Port || 3000;

function requestHandler(request, response){
    console.log(request.method, request.url);
    readFile('./index.html').then(data => response.end(data));  
}

http.createServer(requestHandler)
.listen(port, () => {
console.log( `Server up on http://${host}:${port}`);
})