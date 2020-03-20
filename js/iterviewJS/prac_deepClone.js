const obj1={
    age:20,
    name:'janny',
    address:{
        city:'Beijing'
    },
    arr:['a','b','c']
}
console.log(obj1.address.city)
const obj2=obj1
obj2.address.city='shanghai'
console.log(obj1.address.city)
//下面写个函数实现深拷贝
//深拷贝目标：使得obj2修改值之后，obj1不受影响
/**
 * 深拷贝
 * @param {Object} obj 
 */
function deepClone(obj={}){
    if(typeof obj !=='Object'||obj==null){
        return obj
    }
    let result
    if(obj instanceof Array){
        result=[]
    }else{
        result={}
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {//保证key不是原型上的属性
            //递归保证嵌套对象也可以拷贝出来
            result[key]=deepClone(obj[key])
        }
    }
}
const obj3=deepClone(obj1)
obj3.address.city='shanxi'
console.log(obj1.address.city)