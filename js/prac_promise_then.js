 //then链式调用的工作原理
 //then是Promise的原型上的方法，所以只有Promise的对象可以调用.then方法。
 //而.then可以链式调用，说明每一个.then返回的就是一个Promise实例对象。
 //then支持两个参数，两个参数都是函数类型，第一个函数必选，第二个函数可选。
 //这两个函数分别对应着resolve和reject这两个方法，是一次promise实例的执行结果
 //如果传入的参数不是函数，则会返回一个空的Promise对象。
 function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.src=src
        script.onload=()=> resolve(src)
        script.onerror=()=>reject(err)
        document.head.append(script)
    })
}

loadScript('./pra1.js')
    .then(()=>{
        return loadScript('./pra2.js')
    },(err)=>{
        console.log(err)//err是一个Error对象。
    })
    .then(()=>{
        return loadScript('./pra3.js')
    },(err)=>{
        console.log(err)
    })
//每次函数执行，返回的结果都是在下一个then中体现的。
// 下一个then中的promise对象的执行成功与否也是下下一个then中的内容体现的。

//resolve和reject是Promise的两个静态方法，不是实例方法，可以直接调用
//例如直接使用Promise.resolve(10)，可以将非异步操作，例如输出数据10，转换成异步的操作，从而使得后续链式的.then能继续执行。