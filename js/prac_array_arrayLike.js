//第一：将伪数组转换为数组
//arguments（函数参数），dom中的nodelist等，都是伪数组，可以根据下标找值，可以遍历，拥有长度，但是不能直接调用数组的方法
//es5的做法
let args=[].slice.call(arguments) //collection
let imgs=[].slice.call(document.querySelectorAll('img'))//Nodelist
//arguments在es6中已经废弃。
//[].slice.all() == Array.prototype.slice.all 即 []=Array.prototype，因为[]创建的时候就会去找数组的原型链
//es6的做法
//使用数组对象的新增默认属性：Array.prototype.from
let args=Array.from(arguments)
let imgs=Array.from(document.querySelectorAll('img'))


//第二：对固定长度数组每个元素初始化为相同数字
//es5
let array=Array(5)
array.forEach(function(item){
    item=1
})//这样给array的内部元素进行初始化1是完成不了的
for(let i=0;i<array.length;i++){
    array[i]=1  
}//这样确实可以给array内部元素完全初始化为1，但是比较麻烦。
//es6 from
//下面这一句可以完成数组初始化为1：
let array=Array.from({length:5},function(){return 1})
//这里面的{length:5}也是伪数组
//那么什么是伪数组呢？
// 1 对象是按照索引存储数据的
// 2 具有length属性
// 例如{0:'a',2:'b',length:2}也是一个伪数组
//下面讲一下Array.form语法，参数：
//arrayLike 伪数组
//mapFn 每个元素都要执行一次的函数
//thisArg
