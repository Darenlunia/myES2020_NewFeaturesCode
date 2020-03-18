// 1.forof是遍历同步操作的，内部有异步执行的对象，不会等待
// 2.await所在函数必须加async头部
// 3. for await of是用来遍历 异步对象集合 的

//先制定一个模拟 异步对象 生成器
function Gen(time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}
//生成异步对象
let arr=[Gen(1000),Gen(2000),Gen(100)]

//forof遍历 异步对象
for (const item of arr) {
    console.log(Date.now(),item.then(console.log))
}
// 1584495133828 Promise { <pending> }
// 1584495133843 Promise { <pending> }
// 1584495133844 Promise { <pending> }
// 100
// 1000
// 2000
// 所以输出并没有按照先后执行，而是按照执行快慢来执行。

//用for await of ,注意用之前要给await外层的控制函数定义async。
async function test(){
    for await(const item2 of arr) {
        console.log(Date.now(),item2)
    }
}
test()
//输出：
//1584495394975 1000
// 1584495395972 2000
// 1584495395973 100
//这才是正常的输出结果。
