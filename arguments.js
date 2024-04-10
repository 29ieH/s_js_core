function plusAll(){
    var res = 0;
    for( var i in arguments){
        res+=arguments[i];
    }
    return res; 
}
console.log(plusAll(1,2,3));
//  Anonymous function
console.log(function(){
    return 2+2;
});
