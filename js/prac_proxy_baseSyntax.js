//使用中介保护隐私的过程就是代理,这里是一个入门小demo

//定义一个隐私信息
let o={
    name:'xiaoming',
    price:190
}
//设置一个代理d，去代理o
//new Proxy代理的语法：第一个参数o是代理的数据，第二个参数{}是代理的操作（称为handle，劫持函数，例如改变读get取set原则）
let d1=new Proxy(o,{
    get(target,key){//target代理的原始的真实的对象的信息，key是要读什么信息
        if(key==='price'){
            return target[key]+20
        }else{
            return target[key]
        }
    }//小场景一：对代理的内容进行了中介变换，读信息时会给原信息+20
})
console.log(d1.price,d1.name) 
//只暴露d不暴露o

let d2=new Proxy(o,{
    get(target,key){
        return target[key]
    },
    set(target,key,value){ 
        return false
    }
})//小场景二：可以查询信息，但禁止修改信息，并且隐私对象不会被完全锁死，还可以后续修改。

//同样的小场景二，es5中的方法，用属性描述符
for(let [key] of Object.entries(o)){ //注意key要加中括号，在解构赋值那讲了赋值给key。
    Object.defineProperty(o,key,{
        writable:false
    })
}
//将所有的属性都设置为了不可写。和es6的原理不同，这里是完全锁死原先对象。
//举个例子，数组进行.sort后，原数组就发生了变化，且无法还原，可以使用代理。
