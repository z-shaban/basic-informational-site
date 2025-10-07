const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    let filePath = ''
    let statusCode = 200

    if(req.url == '/'){
        filePath = './index.html'
    }else if (req.url == '/about'){
        filePath = './about.html'
    }else if(req.url == '/contact-me'){
        filePath = './contact-me.html'
    }else{
        filePath = './404.html'
    }

    fs.readFile(filePath, 'utf-8', (err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.end('Server Error: Could not read file')
        }else{
            res.writeHead(statusCode ,{'Content-Type':'text/html'})
            res.end(data)
        }
    })


})

server.listen(8080, 'localHost', () => {
  console.log('✅ Server running at http://localhost:8080');})