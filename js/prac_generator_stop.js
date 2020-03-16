
//控制函数终止，模仿for循环中的break（用return）和continue（用抛出异常）

function * loop(){
    for (const iterator of [1,2,3]) {
        yield console.log(iterator)
    }
}
let l=loop()
l.next()
//generator的方法return，作用是提前终止循环，中止点在上一次的yield处。作用类似于for循环中的break
console.log(l.return())//可以看到返回{ value: undefined, done: true }，这里的done为ture说明整个循环已经结束

//上面模拟break，下面用try{yield}+catch捕获异常+thorw抛出异常来模拟continue
//下面来写一个无限循环
function * gen(){
    while(true){
        try{
            yield console.log(1)
        }catch(e){
            console.log(e.message)
        }
    }
}
let g=gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())//{ value: 1, done: false } 其中done为false 说明没有执行完
g.throw(new Error('ss'))
console.log(g.next())