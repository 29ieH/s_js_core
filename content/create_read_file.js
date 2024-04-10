var http = require('http');
var fs = require('fs'); 
http.createServer((req,res) =>{
    const fileStream = fs.createReadStream('./content/bigfile1.txt/','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(8080);