const http = require('http');

const port = 2000;
const hostName = "localhost";

const server = http.createServer((req,res)=>{
    res.end(<h1>hello</h1>);
});

server.listen(port,hostName,()=>{
    console.log(`server is running on http://${hostName}:${port}`)
})