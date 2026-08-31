const http = require("http");

const server = http.createServer((req,res) =>{
    
    if(req.url === "/"){
        res.end("Welcome to Smart Utility Toolkit");
    }

    else if(req.url === "/about"){
        res.end("This is the About Page");
    }

    else if(req.url === "/contact"){
        res.end("This is the Contact Page");
    }

    else{
        res.writeHead(404);
        res.end("404 - Page not Found");
    }
});

server.listen(8080,() =>{
    console.log("Server is running on port 8080");
});