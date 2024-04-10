const CustomFS = require('fs');

CustomFS.readFileSync('./content/first.txt','utf-8')
console.log('Finish read file 1');
CustomFS.readFileSync('./content/second.txt','utf-8')
console.log('Finish read file 2');
console.log('done')