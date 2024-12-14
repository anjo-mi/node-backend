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
        if ('artist' in params){
            if (params['artist'] === 'cole'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const obj = {
                    name: 'cole',
                    reason: 'very rarely does a grown man apologize when not forced to do so',
                    src: "https://www.youtube.com/embed/IsEw3x3dz30?si=NAfWPbNWvKkpsy9r"
                }
                res.end(JSON.stringify(obj));
            }
            else if (params['artist'] === 'kendrick'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const obj = {
                    name: 'k dot',
                    reason: 'cats can paw at whatever, but a dog will still bite its head off',
                    src: "https://www.youtube.com/embed/pn3JwYoqRN8?si=NAfWPbNWvKkpsy9r"
                }
                res.end(JSON.stringify(obj));
            }
            else if (params['artist'] === 'drake'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const obj = {
                    name: 'drake',
                    reason: 'well, drake thinks youre right',
                    src: "https://www.youtube.com/embed/iHHMG9IXfMk?si=NAfWPbNWvKkpsy9r"
                }
                res.end(JSON.stringify(obj));
            }
        }
    }
})

server.listen(9000);