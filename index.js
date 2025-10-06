const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        const homepage = fs.readFileSync('./index.html','utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homepage);
    }else if(req.url == '/about'){
      const about = fs.readFileSync('./about.html','utf-8')
      res.writeHead(200, {'content-type' : 'text/html'})
      res.end(about)
    }else if(req.url == '/contact-me'){
      const contact = fs.readFileSync('./contact-me.html', 'utf-8')
      res.writeHead(200, {'Content-Type':'text/html'})
      res.end(contact)
    }else{
      const errorPage = fs.readFileSync('./404.html','utf-8')
      res.writeHead(404, {'Content-Type':'text/html'} )
      res.end(errorPage)
    }

})

server.listen(8080, 'localhost', () => {
  console.log('✅ Server running at http://localhost:8080');
});