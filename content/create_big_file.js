const {writeFileSync,appendFileSync} = require('fs');
    writeFileSync('./content/bigfile.txt','Nieh29');
    for(var i = 0 ; i < 1000 ; i++){
        appendFileSync('./content/bigfile1.txt',`Hello world ${i}\n`);
    }