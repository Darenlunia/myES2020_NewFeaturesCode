//运行时，才确定哪个类或者哪个方法被加载执行

//ES5中，先指定函数，在调用apply
console.log(Math.floor.apply(null,[3.12]))
//ES6中，先指定apply，在运行代码时，才知道是使用Math.floor对后面的数据进行操作。
console.log(Reflect.apply(Math.floor,null,[4.12]))//变成了三个参数
//注意 Reflect不能new

// 买东西的价格大于100，向下取整(floor);小于100，向上取整(ceil)。
//在es5中，一般要用if else来选择执行哪个函数，而在es6中：
let price=90.5
console.log(Reflect.apply(price>100?Math.floor:Math.ceil,null,price))

