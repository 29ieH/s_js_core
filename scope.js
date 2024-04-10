var avar = "something global";
afunc();
function afunc(){
    console.log(avar+"<br/>");
    var avar = "something local";
    console.log(avar+"<br/>"); 
}
function global(){
    console.log(this);
}
var o = {"local": function(){
    console.log(this + this.x);
    },
    "x" : 10
};
global();
o.local();
// this
var student = {
    name: 'Mai Ha Thi',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deStudent = student.getName();
var person1 = {name: 'Nhat Minh',age:12};
var person2 = {name:'Huu Trung',age:32};
var sayHello = function(){console.log('Hello, '+this.name)};
var sayGoodBye = function(){console.log('Goodbye, '+this.name)};
// Error because this is not exits property name 
// Use call and apply, de this co the hieu 
sayHello.call(person1);
sayGoodBye.call(person2);
sayHello.apply(person1);
sayGoodBye.apply(person2);
// Scope chain
function step1(){
    console.log(te);
}
function step2(){
    var te = 2;
    step1();
}
step2();
var te = "Global Variables";
// Scopes, Bind
var checkNumericRange = function(value){
    if(typeof value !== 'number'){
        return false;
    }else{
        return value >= this.minimun && value <= this.maximum;
    }
}
var range = {minimun: 10,maximum : 20};
// Bind
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange(12);
console.log(result);
//Currying 
function add(v1,v2){
    return v1+v2;
}
function curriedAdd(v2){
    return add(5,v2);
}
function add(a,b,c){
    return a+b+c;
}
function addCurries(a){
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}
// Lexical Scope
function fOuter(){
    var x = "Hello";
    function fInner(){
        x = "world";
    }
    fInner();
    return x;
}
console.log(fOuter());

var myFunction = function (){
    var name = 'Ha Thi';
    var myOtherFunction = function(){
        console.log('I am '+ name);
    };
    console.log(name);
    myOtherFunction();
}
myFunction();
Closures
function outerF(){
    var x = "World";
    function innerFset(val){
        x = val;
    }
    return innerFset;
}
var a = outerF("a");
var c = a();
console.log(c);
var sayBye = function(name){
    var text = 'Bye'+name;
    return ()=>{
        console.log(text);
    }
}
// sayBye("My") Error
var calledMe = sayBye("My");
calledMe();