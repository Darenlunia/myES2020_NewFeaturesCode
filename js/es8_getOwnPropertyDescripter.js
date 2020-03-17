//获得Object的数据描述符的新方法
const data={
    x:1,
    y:2,
    z:3
}
//什么是属性描述符：
Object.defineProperty(data,'x',{
    //定义属性描述符
    enumerable:false,
    writable:false
})
//查看一个属性的描述符(两种-一个有s一个没s)：
console.log(Object.getOwnPropertyDescriptors(data))
console.log(Object.getOwnPropertyDescriptor(data,'x'))