//延伸到Generator的Iterator写法
//也就是说Iterator有两种写法，一种是demo中的框架写法，一种是generator写法，根据自己写的喜好选择即可，终极目标就是将一个对象能搞成可forof遍历的对象就可以了。

// function * gen(){
//     let val
//     val=yield * [1,2,3]
//     console.log(val)
// }
// const l=gen()
// // {
// //     next(){
// //         value:1,
// //         done:false
// //     }
// // }
// console.log(l.next())//{ value: 1, done: false }
// console.log(l.next())//{ value: 2, done: false }

//这里的next() 涉及到了迭代器协议。
//可以用gennerator替代iterator中的next 
//下面就对generator_demo中的Iterator进行改造：
let authors={
    allAuthors:{
        fiction:['Agul','Jack','Lony'],
        science:['Adison','Arstan','Even'],
        fantasy:['Lobison','Zoey','Danny']
    },
    address:[]
}
authors[Symbol.iterator]=function * (){//加*号
    let allAuthors=this.allAuthors//限定对象中要遍历的模块
    let keys=Reflect.ownKeys(allAuthors)
    let values=[]
    while(1){//用while(1)，去掉了return和next(){return}结构
        if(!values.length){
            if(keys.length){
                values=allAuthors[keys[0]]
                keys.shift()
                yield values.shift()//使用yield这一句话来代替之前demo中的return内容，因为yield表达式的值就是next的返回值。
                //使用yield自动监控来隐式传递done和value，来代替之前手动控制next的done和value显示展示这两个值。
            }else{
                return false
            }
        }else{
            yield values.shift()
        }
    }
}
const r=[]
for (const iterator of authors) {
    r.push(iterator)
}
console.log(r)




