//场景三：对校验时出错的内容进行触发错误，并监听和上报错误，并且把错误上报和校验规则的业务解耦开。
let o1={
    name:'xiaoming',
    price:190
}

//监听错误
window.addEventListener('error',(e)=>{
    console.log(e.message)
    report('上报')//上报错误
})

//校验规则，配合错误监听
let validator=(target,key,value)=>{
    if(Reflect.has(target,key)){
        if(key='price'){
            if(value>300){
                throw new TypeError('price exceed 300')//不满足规则就会触发错误
                // return false
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
        return target[key] || ''
    },
    set:validator
})
d1.price=280
console.log(d1.name,d1.price,d1.age)
d1.price=330
console.log(d1.name,d1.price,d1.age)