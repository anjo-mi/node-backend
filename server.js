const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');

const server = http.createServer((req,res) => {
    const page = url.parse(req.url).pathname;
    const params = queryString.parse(url.parse(req.url).query);

    if (page === '/'){
        fs.readFile('index.html', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    else if (page === '/css/style.css'){
        fs.readFile('css/style.css', (err,data) => {
            res.write(data);
            res.end();
        })
    }
    else if( page === '/js/main.js'){
        fs.readFile('js/main.js', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        })
    }

    else if (page === '/images/jcole.jpg'){
        fs.readFile('images/jcole.jpg', (err,data) => {
            res.write(data);
            res.end();
        })
    }
    else if (page === '/images/kendrick.jpg'){
        fs.readFile('images/kendrick.jpg', (err,data) => {
            res.write(data);
            res.end();
        })
    }

    else if (page === '/images/drake.webp'){
        fs.readFile('images/drake.webp', (err,data) => {
            res.write(data);
            res.end();
        })
    }

    else if (page === '/api'){
        if ('rapper' in params){
            if (params['rapper'] === 'jcole'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const obj = {
                    name: 'J Cole',
                    reason: 'very rarely does a grown man apologize when not forced to do so',
                    vid: 'https://www.youtube.com/embed?v=F18RQuT3-c0&autoplay=0'
                }
            }
        }
    }
})

server.listen(9000);