const http = require('http');

const host = process.env.Host || 'localhost';
const port = process.env.Port || 3000;

function requestHandler(request, response){
    console.log(request.method, request.url);
    response.end('Hi there again');
}

http.createServer(requestHandler)
.listen(port, () => {
console.log( `Server up on http://${host}:${port}`);
})