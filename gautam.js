const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);

    // HTML serve karo
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "loginpage.html"), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading HTML");
            } else {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(data);
            }
        });
    } 
    // CSS serve karo
    else if (req.url === "/loginpage1.css") {
        fs.readFile(path.join(__dirname, "loginpage1.css"), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("CSS not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    }
    // Baaki sab 404
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(8100, () => console.log("Server started at http://localhost:8100"));
