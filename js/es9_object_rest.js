//之前的相関概念浅拷贝和深拷贝，对象浅拷贝就是直接替换指针
//还有之前在es6的函数那一块讲的参数传入，可以将数组打散传入，也可以将参数组装成数组传出，用的是rest参数
//例如，...+数组名，返回的是数组打散后的每个元素值
//这里讲的是将对象合并所有的rest，和参数的rest是一个用法，如下案例所示。
//一个案例：合并对象
const input={
    a:1,
    b:2
}
//将input合并到output当中：
const output={
    ...input,//就是把input中的内容打散放到output中去
    c:3
}
console.log(output)
//注意，再次修改input值的时候，output不会随着input中的值变化
input.a=10
console.log(output)
//所以说这里的rest传值，只是实现了一个浅拷贝，不是真正的引用

//第二个案例：
const obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
const {a,b,...rest}=obj
console.log(a,b,rest)

//注意这里的...rest祈祷的作用是打散-spread