//自定义数据结构的遍历方法
//如何让不支持遍历的数据结构支持遍历
//如果想让你的对象支持遍历，那一定要给它部署可遍历接口
let o={
    x:{
        a:[1,2,3],
        b:[4,6,7],
        c:[2,3,2]
    },
    y:[1,4,5]
}

//将x中的所有元素都进行遍历
r=[]
for (const [,v] of Object.entries(o.x)) {//需要将o.x进行entries转换，转了格式才能遍历
    console.log(v)
    r.concat(v)
}
console.log(r)

// for (const iterator of o) {
//     console.log(iterator)
// }//报错：TypeError: o is not iterable
// for (const iterator of o.x) {
//     console.log(iterator)
// }//报错：o.x is not iterable

//怎么解决这个报错问题：让它们支持遍历
//如果想让你的对象支持遍历，那一定要给它部署可遍历接口
//所以下面才是正文

//这里先写一个没有任何业务逻辑的纯框架：
//硬性框架规范，必须这么写
//首先给要部署遍历接口的对象关联上这个接口方法:
//使用挂载方法的方式部署这个接口，这个接口方法的key值：Symbol.iterator ；value是一个function，里面写接口的实现逻辑
o[Symbol.iterator]=function(){
    //规定接口的输入：this（对象本身），输出：固定格式的返回值,如下
    return{//返回一个对象
        next(){
            return{
                done:false,//是否遍历完毕
                value:1//遍历的项的索引
            }//这里的done和value对应gennerator中next的两个返回值
        }
    }
}
//综上这个框架包含以下几个部分的约束：
//第一，在对象上挂在一个key为Symbol.iterator，value为方法
//第二，这个value中的方法有固定的的输入，即对象this，输出是一个对象
//第三，输出的这个对象中必须有一个next的方法，并且next的方法必须返回一个对象
//第四，这个对象必须有两个值，分别是done和value

//这个框架是由两个协议决定的：迭代器协议 可迭代协议
//可迭代协议：想判断一个对象是不是可迭代，就去找对象上是否有Symbol.iterator为key的方法，如果没有这个对象就不可迭代
//迭代器协议：要求必须返回一个对象，对象无参数且命名为next，next中有done和value