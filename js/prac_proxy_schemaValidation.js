//proxy可以做校验
let o={
    name:'xiaoming',
    price:190
}
//用户不可以破坏数据结构，--》只能修改价格
//拦截无效数据，--》不能瞎改价格,这里让价格不能大于300
let d=new Proxy(o,{
    get(target,key){
        return target[key] || '' //当traget[key]=false，则会取空
    },
    set(target,key,value){
        if(Reflect.has(key)){
            if(key='price'){
                if(value>300){
                    return false
                }else{
                    target[key]=value
                }
            }else{
                return false
            }
        }
    }
})

//为了不与业务耦合，可以将校验规则模块提取出来：
let o1={
    name:'xiaoming',
    price:190
}
let validator=(target,key,value)=>{
    if(Reflect.has(target,key)){
        if(key='price'){
            if(value>300){
                return false
            }else{
                target[key]=value
            }
        }else{
            return false
        }
    }
}
let d1=new Proxy(o,{
    get(target,key){
        return target[key] || '' //当traget[key]=false，则会取空
    },
    set:validator
})
d1.price=280
console.log(d1.name,d1.price,d1.age)