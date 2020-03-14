let x=1
let y=2
let z=3
let obj={x,y}//es6的简写形式 
//上面这句等价于下面原es5的对象构建形式：
let obj1={x:x,y:y}
//给obj加一个值：
obj[z]=5

//另外，es5中，在对象的大括号里用key-value建立属性时，key只能是字符串 
//在es6中可以以一个表达式为key值，要用中括号括起来
let m=1,n=2,l=3
let obj2={
    'm':m,
    n:n,
    [l]:5
}
//{ '3': 5, m: 1, n: 2 }
console.log(obj2)
let a="aa",b="bb"
let obj3={
    a,
    b,
    [a+b]:"aabb"
}
console.log(obj3)

//关于函数上，原先的es5要写成如下
let obj4={
    hello:function(){}
}
//es6现在可以写成如下
let obj5={
    hello(){}//即直接写一个常规函数
}
let obj6={
    * hello(){}//还可以写一个异步函数
}