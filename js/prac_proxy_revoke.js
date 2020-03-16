//撤销代理，不要代理了，解除合同
//将 new Proxy 改成用 Proxy.revocable 来声明
let o={
    name:'xiaoming',
    price:190
}
//此时的d包含两部分数据，d:{proxy:Proxy(代理的数据信息),revoke:f（表示销毁动作）}一个是包含的代理数据，一个是撤销操作。
// 要读取数据必须用d.proxy再去读取属性
let d=Proxy.revocable(o,{
    get(target,key){
        return target[key] || ''
    },
})

// 要读取数据必须用d.proxy再去读取属性
console.log(d)
setTimeout(()=>{
    d.revoke()//调用撤销操作
    setTimeout(()=>{
        console.log(d.proxy.price)//撤销后就不能再调用了
    },100)
},1000)