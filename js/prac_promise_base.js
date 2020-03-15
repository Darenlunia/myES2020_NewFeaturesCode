// //模拟一个异步加载js脚本的函数。
// function loadScript(src){
//     let script=document.createElement('script')
//     script.src=src
//     document.head.append(script)
// }
// function test(){
//     console.log('test')
// }
// console.log('第一次模拟')
// loadScript('./pra1.js')
// test()
// //上面先执行test再执行pra1。
// //因为js是单线程的，执行loadScript时，会将pra1的加载放入异步队列，再执行test，然后再执行异步队列中的内容。

// //想改变这种异步执行方法的话可以使用回调函数，在执行完异步队列中的内容后再执行回调函数。
// function loadScript2(src,callback){
//     let script=document.createElement('script')
//     script.src=src
//     script.onload=(src)=>{callback(src)}//修改了执行顺序
//     script.onerr=(err)=>{callback(err)}
//     document.head.append(script)
// }
// function test2(name){
//     console.log(name)
// }
// loadScript2('./pra2.js',test2(script))
// //而当有多个程序需要异步改同步的时候，会有多层的地柜嵌套：
// loadScript2('./pra1.js',function(script){
//     loadScript2('./pra2.js',function(script){
//         loadScript2('./pra3.js',test2)
//     })
// })
// //而实际中，除了这些递归外，还有很多其他的操作逻辑夹杂在里面，代码看起来很不友好。


//es6的promise解决上面多层嵌套回调函数的异步回调处理问题
function loadScript3(src){
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.src=src
        script.onload=()=> resolve(src)
        script.onerror=()=>reject(err)
        document.head.append(script)
    })
}
//promise接受一个函数作为参数，这个函数的两个参数分别是resole和reject
loadScript3('./pra1.js')
    .then(loadScript3('./pra2.js'))
    .then(loadScript3('./pra3.js'))


//Promise的基本原理：
// 当执行new Promise 时返回：state=pending（挂起状态） result=undefined的状态。
// 通过使用resolve和reject可以改变Promise的state和result，resolve和reject只能有一个被执行。
// 当执行resolve的时候，state=fulfilled,result是现传进来的值。
// 当执行reject的时候，state=rejected，result=error。
// 在整个promise+then过程中，一直都是再执行上述过程。
