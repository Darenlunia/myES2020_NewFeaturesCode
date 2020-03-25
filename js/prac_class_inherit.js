//类的继承
//es5中的继承：
let Animal1= function(type){
    this.type=type;
}
Animal1.prototype.eat=function(){
    console.log('i eat food')
}
//继承animal类.
let Dog1=function(){
    // 需要在dog的构造函数中，初始化父类的构造函数，
    // 并令this指向当前类。
    Animal1.call(this,'dog1') 
    //上面这句只继承了父类的构造函数里的属性和方法，如何继承原型链上的呢？
}
Dog1.prototype=Animal1.prototype
//上面这句将子类的原型链指到了父类的原型链上。这是引用类型的赋值，所以是指针的赋值。
//这是子类就继承到了父类的原型链上的内容。


//es6实现继承
class Animal2{
    constructor(type){
        this.type=type
    }
    eat(){
        console.log('i can eat')
    }
    static walk(){
        console.log('i can walk')
    }
}

class Dog2 extends Animal2{
    constructor(type,age){
        super(type)//执行父类的构造函数
        this.age=age
    }//如果子类没有其他属性，不需要写这四行，super父类会隐式继承，而如果显示调用了构造函数，必须要在里面的第一行写super(args)。
}


class Dog3 extends Animal2{
    constructor(type,age){
        super('dog')//这样也是可以的
        this.age=age
    }
}