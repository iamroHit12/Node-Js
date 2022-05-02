const http = require('http');
const fs = require("fs");

const port = 2000;
const hostName = "localhost";

const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url==="/")
        return res.end(home);
    if(req.url==="/about")
        return res.end("<h1>about page</h1>")
    if(req.url==="/service")
        return res.end("<h1>service page</h1>");
    else
        return res.end("<h1>404 page not found</h1>");
});

server.listen(port,hostName,()=>{
    console.log(`server is running on http://${hostName}:${port}`)
})