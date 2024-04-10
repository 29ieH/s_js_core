const Emitter = require('events');
const myEmitter = new Emitter();
myEmitter.on('Load',(a)=>{
    console.log(`Load page is ${a}`)
})
myEmitter.on('Load',()=>{
    console.log('Hello world');
})
myEmitter.emit('Load',2)