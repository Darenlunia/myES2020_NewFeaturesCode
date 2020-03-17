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
    let allAuthors=this.allAuthors
    let keys=Reflect.ownKeys(allAuthors)
    let values=[]//设置一个存储项 
    return{
        next(){
            if(!values.length){
                if(keys.length){
                    values=allAuthors[keys[0]]
                    keys.shift()
                }
            }
            return{ //返回的是一次next执行的结果
                done:!values.length, 
                value:values.shift()
            }
        }
    }
}

let r=[]
for(let v of authors){//测试数据，可以忽略数据的内部结构直接去遍历，可以解耦数据和业务逻辑
    r.push(v)
}
console.log(r)