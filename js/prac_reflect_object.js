//Reflect.defineProperty算是从Object上迁移过来的definedPrpperty
//用于给一个对象定义一些属性
const student={}
const a = Object.defineProperty(student,'name',{value:'Mike'})
const b = Reflect.defineProperty(student,'sex',{value:'boy'})
//新增属性
Reflect.set(student,'age',12)
console.log(student.name+'   '+student.sex+'   '+student.age)
//两者效果相同，但是返回结果不同：
console.log(a+" | "+b)
//刚刚是定义或新增一些属性，也可以删除：
Reflect.deleteProperty(student,'age')

//读对象的属性-ger
console.log(student['name'])
console.log(student.name)
console.log(Reflect.get(student,'name'))//第一个参数是对象，第二个是属性名
console.log(Reflect.get([3,4],1))
//对应get的新增属性set
const arr=[12,13,14]
Reflect.set(arr,2,'goose')
//获得 属性描述符（属性是不是可读、是否可配置等等）-getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor(student,'name')
Reflect.getOwnPropertyDescriptor(student,'name')

//判断是否具有某个属性
//Object没有has这个方法
let obj={x:1,y:2}
Reflect.has(obj,'x')
//判断一个对象是否是可扩展
Reflect.isExtensible(obj)
//使其不可扩展,不能再新增属性。
Object.freeze(obj)//等价于下面这句
Reflect.preventExtensions(obj)
Reflect.isExtensible(obj)//判断是否可扩展
//列出其自由属性（区分原型链属性）
Reflect.ownKeys(obj)
Reflect.ownKeys([1,2])
//symbol 不太常用的一个数据类型，和ownKeys有关。

//下面是非常常用的，读写原型链的方法，getPrototypeOf/setPrototypeOf
//获取/修改原型链/原型对象
//找原型链对象，快速打印原型对象内容
let d=new Date()
Reflect.getPrototypeOf(d)
let array=['duck','duck','duck']
console.log(Reflect.getPrototypeOf(array))
Reflect.setPrototypeOf(array,String.prototype)//从数组改为字符串原型
// 然后调用array.sort是会出错的。
console.log(Reflect.getPrototypeOf(array))
