const http = require('http');
const { text } = require('stream/consumers');
const fs = require('fs');
const port = '4640';
const hostname = '127.0.0.1'
const myServer = http.createServer((req, res) => {
    if (req.url === "/"){
        fs.readFile("page1.html", (err, data) => {
            res.writeHead ( 200, {"content-type": "text/html"});
            res.write(data);
                res.end();
        });
    }
    else if (req.url === "/page2"){
        fs.readFile("page2.html", (err, data) => {
            res.writeHead ( 200, {"content-type": "text/html"});
            res.write(data);
                res.end();
        });
    }
    else if (req.url === "/page3"){
        fs.readFile("page3.html", (err, data) => {
            res.writeHead ( 200, {"content-type": "text/html"});
            res.write(data);
                res.end();
        });
    }
    else if (req.url === "/page4"){
        fs.readFile("page4.html", (err, data) => {
            res.writeHead ( 200, {"content-type": "text/html"});
            res.write(data);
                res.end();
        });
    }
    else if (req.url === "/page5"){
        fs.readFile("page5.html", (err, data) => {
            res.writeHead ( 200, {"content-type": "text/html"});
            res.write(data);
                res.end();
        });
    }
    else{
        fs.readFile("error.html", (err,data) => {
            res.writeHead( 404, {"content-tyoe": "text/html"});
            res.write(data);
            res.end();
        })
    }
});
myServer.listen(port, hostname, () => {
    console.log(`Server has been succesfulkly created at http://${hostname}:${port}`);
})

