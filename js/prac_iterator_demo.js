//使用前面总结的遍历接口框架来写一个demo
let authors={
    allAuthors:{
        fiction:['Agul','Jack','Lony'],
        science:['Adison','Arstan','Even'],
        fantasy:['Lobison','Zoey','Danny']
    },
    address:[]
}

//demo就是 -->  控制一个指针， 依次遍历指向allAuthors中的每个元数据。
//这个指针怎么定义是由对象的类型和业务逻辑决定的。
authors[Symbol.iterator]=function(){
    //注意框架中的this指的是被遍历的对象
    let allAuthors=this.allAuthors//设置遍历对象中的实际遍历内容
    let keys=Reflect.ownKeys(allAuthors)//取出要遍历的外层
    let values=[]
    return{
        next(){//每次遍历都要执行一次的next
            if(!values.length){//在if中设置要返回的done和value值
                if(keys.length){
                    values=allAuthors[keys[0]]
                    keys.shift()
                }
            }
            return{ //返回的是一次next执行的结果，也就是遍历对象的时候的一个v
                done:!values.length, 
                value:values.shift()
            }
        }
    }
}

let r=[]
for(let v of authors){
    r.push(v)
}
console.log(r)
//使用迭代器可以忽略数据的内部结构直接去遍历这个数据外层，从而解耦数据和业务逻辑