const fs = require('fs')
const http = require('http')
const { Http2ServerResponse } = require('http2')

// let server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end("<h2>Hello World</h2>"+" "+req.url)
// })

let server = http.createServer(function(req, res){
    if(req.url === "/")
    {
        fs.createReadStream(__dirname+"/index.html")
        .pipe(res)
    }
    else if(req.url === "/flag"){
        fs.readFile(__dirname+'/images/cat.jpg', (err, data)=>{
            if(err){
                console.log(err.message)
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write('<div>')
                res.write('<img style="height:200px; width:400px" src="data:image/jpg;base64,')
                res.write(Buffer.from(data).toString('base64'))
                res.write('"/></div>')
                res.end()
            }
        })
    }
    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type':'text/json'})

        let obj = {
            firstName : "John",
            lastName : "Smith"
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.writeHead(404)
        res.end()
    }

})

server.listen(3000, (err)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log("Server listening @3000")
    }
})