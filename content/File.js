const CustomFS = require('fs')
var first = CustomFS.readFile('./content/first.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});
var second = CustomFS.readFile('./content/second.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});
console.log('Start')
CustomFS.writeFile('./content/meregefile',`${first},${second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Done with this task')
});
console.log('Starting next task')

