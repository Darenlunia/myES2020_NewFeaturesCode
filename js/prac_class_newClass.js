//es5：一切都是对象，用函数模拟类。
let Animal=function(type){
    this.type=type
    this.eat=function(){}
}//相当于一个构造函数，而共有类要写在prototype中。
let dog=new Animal('dog')
let cat=new Animal('cat')
//每个子类都会有一个eat，不会共享父类的eat，如果想公有使用这个函数，这种方法会浪费内存。
Animal.prototype.eat=function(){
    console.log("i like eat food")
}//只要挂在原型链上就可以共享函数了，这是原型链构造函数法。
// 如何通过一个实例去修改函数呢？
cat.constructor.prototype.eat=function(){
    console.log("i like eat meat")
}//这时在cat中修改的方法将会直接影响到Animal的方法，也会影响到继承实例的dog的eat方法。
dog.eat()

//es6
class Animal_new{
    constructor(type){
        this.type=type
    } 
    eat(){
    }//这里面构造的函数eat(){}是共享的，和java/c++中的类中的公有函数是一样的；
    //实际上es6是将这个eat()封装到了Animal_new的原型链上。
    //所以es6虽然新构建了一个类，但和es5构建构造函数和公有函数的原理是一样的。
    //即class是es6构建的一个语法糖，即语法不同，但本质一样。
}

console.log(typeof Animal_new);//输出function
