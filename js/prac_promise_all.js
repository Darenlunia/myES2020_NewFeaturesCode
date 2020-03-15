// base、then、catch三个笔记是讲的主要是事件之间的顺序执行
//后面的all和race讲的事件同时执行

// 模拟三个异步操作：
const p1=Promise.resolve(1)
const p2=Promise.resolve(2)
const p3=Promise.resolve(3)
//all的参数是一个Promise对象的数组
Promise.all([p1,p2,p3]).then((value)=>{
    console.log(value)
})
// 最后then执行的是Promise数组中的三个异步全部都执行完后才执行的内容
//全部执行完的意思是所有异步函数的state都变成了fullfilled。
//如果Promise对象数组中有一个Promise发生了异常，或者error，后续的then就不会被执行，也就是总状态不会变成fullfilled。