// 实例化一个类，一般用new操作符
let d=new Date()
console.log(d.getTime)

//现在可以用反射的方法进行类的实例化
//Reflect新API：= construct方法
//第一个参数：类名；第二个参数：前面哪个类的构造函数的参数，第二个参数必须要写，如果为空也要传一个空数组。
let d1=Reflect.construnct(Date,[])
console.log(d1.getTime)
//通过这种方法可以实现调用不同的类，动态的实例化一个对象

