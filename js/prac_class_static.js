//实例对象的方法 和 类的静态方法（只能通过类访问到，不能通过类的实例访问到，
// 在类里的其他函数对它进行访问的时候，或者在函数外部进行访问的时候
// 也只能用类名.方法调用，不能用this.方法调用）
//类的静态方法拿不到当前对象的方法，但是实例对象的方法啊可以调用类的静态方法。

//es5中的静态方法，下面eat、wash的实例对象方法，walk是类的静态方法
let Animal1=function(type){
    this.type=type
}
Animal1.prototype.eat=function(){
    console.log("这是实例对象的方法")
}
Animal1.walk=function(){
    console.log("这是类的静态方法")
}
//调用方式（在类的实体方法中调用）
Animal1.prototype.wash=function(){
    this.eat()
    // this.walk()//错误，静态函数不能通过对象访问到，这里的this指向的是当前对象。
    Animal1.walk()//应该用类名调用这个静态方法。
}
//调用方式（在类的外面中调用）
Animal1.walk()


//下面的eat是实例对象的方法， walk是类的静态方法
class Animal2{
    constructor(type){
        this.type=type
    }
    eat(){
        console.log('i eat food')
    }
    static walk(){
        Animal2.walk();
        console.log('i am walking')
    }
}
Animal2.walk();