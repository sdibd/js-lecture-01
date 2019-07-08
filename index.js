const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);

    if (request.url == '/') {
        const content = fs.readFileSync('index.html', 'utf8');
        response.end(content);        
    } else if (request.url == '/style.css') {
        const content = fs.readFileSync('style.css', 'utf8'); 
        response.end(content);
    }
})

server.listen(4000);
console.log('server srarted!');