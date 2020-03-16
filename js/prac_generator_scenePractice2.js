//这个例子比较简单了，就是有个游戏，每次下一个人说出下一个三的倍数
function * gen(){
    let x=0
    while(1){//发现和while（1）配合使用的频率还挺高的
        if(x%3===0){
            yield x
        }
        x++
    }
}

let num=gen()
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.return())//手动停止游戏
