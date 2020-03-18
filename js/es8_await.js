//使用await代替then操作
//await必须跟随async使用，也就是说函数内部如果有await的话，一定要在这个函数前加async，注意不是定义promise的函数前加，而是在使用await的函数中加。
//async和await其实是Promise的语法糖，换了一种写法，但是原理相同。

async function as1(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('now it is done')
        },1000)
    })
    console.log(await promise)//await使得promise执行完后再执行后面的语句
    console.log(await 1)
    console.log(2)
    return 3
}

as1().then(val=>{
    console.log(val)
})
//最终输出:
// now it is done
// 1
// 2
// 3

//async的return和await后面都要跟promise函数
//如果跟一个常量会直接将其转化为Promise.resolve(number)