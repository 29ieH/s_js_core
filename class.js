class Rect{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    calcArea = () => {
        return this.w * this.h;
    }
}
var rec1 = new Rect(1,2,3,4);
console.log(rec1.calcArea());
class Pet{
    constructor(name,introduct){
        this.name = name;
        this.introduct = introduct;
    }
    introductMT = (namePet = name) => {
        console.log(`My name is ${namePet}`);
    }
    talk = (introPet = this.introduct) => {
        console.log(`${intro}`);
    }
}
class square{
    constructor(width){
        this.width = width;
    }
    getArea(){
        console.log(`Square of this ${this.width*this.width}`);
        return this.width*this.width;
    }
}
class cube extends square{
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.squareArea*this.width}`);
        return this.squareArea * this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume();
class Dog extends Pet{
    constructor(name,introduct,type){
        this.name = super.name;
        this.introduct = super.introduct;
        this.type = type;
    }
    constructor(type){
        super(this.name,this.introduct);
        this.type = type;
    }

    type = () => {
        console.log(`Type: ${this.type}`);
    }
}
var pet1 = new Pet("Dog","Gau Gau");
pet1.introductMT();
pet1.talk();