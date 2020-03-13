//()=>{}
// es6新增的声明函数方法：
let hellp=()=>{ //没有参数
    console.log("name")
} 
let hellp=(name)=>{ //一个参数
    console.log(name)
} 
let hellp= name=>{ // 以个参数的时候也可以省略括号
    console.log(name)
}
//多个参数的时候不能省略

//省略花括号和return的情况--返回表达式
let sum= (x,y,z)=> x+y+z
//省略花括号和return的情况--返回对象，用小括号括起来对象
let sum =(x,y,z)=>({
    x:x,
    y:y,
    z:z
})
//等同于下面的加上花括号和return
let sum =(x,y,z)=>{
    return {
    x:x,
    y:y,
    z:z
}}
//其他情况不能省略花括号



//箭头函数中的this（和普通函数很不相同）
let test={
    name:'test',
    say:function(){
        console.log(this.name)
    }
}
//(es5中)判断this方法：谁掉用了this所在的function，this就指向了谁
test.say()//输出test
//而当把say定义的函数换成箭头函数时，this的指向不再和es5中定义的一样了
let test2={
    name:'test2',
    say:()=> {
        console.log(this.name)
    }
}
//（es6）判断this方法：定义的时候this指向什么，执行的时候this指向什么
test.say()//输出window

//使用箭头函数实现数组排序
var arr=[1,3,2,6,4]
arr.sort((x,y)=>x-y)
console.log(arr)

