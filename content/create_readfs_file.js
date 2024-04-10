var http = require('http');
var fs = require('fs'); 
http.createServer((req,res)=>{
    var data = fs.readFileSync('./content/bigfile1.txt','utf8');
    res.end(data);
}).listen(5000)