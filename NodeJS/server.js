const fs = require('fs')
const http = require('http')

let server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end("<h2>Hello World</h2>"+" "+req.url)
})

server.listen(3000, (err)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log("Server listening @3000")
    }
})