//es6对类中的属性进行只读只写（属性保护）
class Animal{
    constructor(type){
        this.type=type
    }
    get age(){//可以将属性变量放在constructor外面，但是必须加get或set
        //也就是说，写在外面的变量一般都是函数，如果加上get或者set，那么它就不是函数，而是属性。
        return 4
    }
    eat(){
        console.log("i eat food")
    }
}
let dog=new Animal('dog')
console.log(dog.age)
dog.age=5
console.log(dog.age)//还是输出4，赋值5不会起作用。

class Animal2{
    constructor(type){
        this.type=type
    }
    get age(){//可以将属性变量放在constructor外面，但是必须加get或set
        //也就是说，写在外面的变量一般都是公有函数，如果加上get或者set，那么它就不再代表函数，而是一个可读属性。
        return 4
    }
    set age(val){
        // this.age=val 错误
        this.newage=val//注意这里不能用age了
        //同时，如果用.age(x)赋值时，再引用新值一定要用newage，不要用age
    }
    //上述的原理：age只是被看做一个属性，在调用的时候，按照属性调用，而不是按照函数调用（也就是说调用的时候后面不需要加括号），而不是真正的属性，它本身其实还是一个函数，所以在重置值的时候，不能在age函数中修改this.age，而是需要要换一个名字。
    //也就是说当前面加上set或者get的时候，可以直接把age看作一个暴露给对象外面的关于年龄属性设置的出入口，age不是真实的年龄值。
    //这个出入口函数中的内容不具有特定模板，用户可以在这个age函数中增加自定义的判断条件，例如当满足某个条件的时候，get内部真实的值才能return 某个值，或者满足条件时，set才能重置一个新值。
    eat(){
        console.log("i eat food")
    }
}

let cat=new Animal2('cat')
console.log(cat.age)
cat.age(5)
console.log(cat.newage)


