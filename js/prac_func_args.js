//默认参数问题
//es5处理参数默认值
function f(x,y,z){
    if(y===undefined){//对缺省参数设置默认值
        y=7
    }
    if(z===undefined){
        z=42
    }
    return x+y+z
}
console.log(f(1,2))
//es6默认值处理，同c语言
function f1(x,y=7,z=42){
    return x+y+z
}
console.log(f1(1,undefined,3))//用undefined跳过默认值
//es6还可以让参数值是其他参数值的表达式


//不确定参数问题
//es5中使用arguments判断传入的参数个数和内容
//es6舍弃了arguments，那么如何判断传入了多少参数呢？
//首先arguments.length和f.length的区别：f.length是没有默认值的参数的个数(f是函数名)
//给一个需求：对所有输入参数求和：
//es5
function sum(){
    let num=0;
    Array.prototype.forEach.call(arguments,function(item){num+=item*1})    
    //这里再次加深call的理解，一次call相当于一次换this的操作。
    return num
}
//es6 ---> Rest parameter（读作：rest参数）： 省略号+用户自定义的参数数组名
//和es5的不同是，es6这里是数组，并且可以和第一个参数分离剩下的结成数组，并且可以自定义数组名称；
//而es5中的arguments伪数组，固定名称
function sum2(...nums){//即所有的参数都放在nums数组中
    let num=0;
    nums.forEach(function(item){
        num+=item*1
    })
    return num
}
function sum3(base,...num){//也可以预留第一个参数，剩下的参数放在nums数组中。
    let num=0;
    nums.forEach(function(){
        num+=item*1
    })
    return base*2+num //应用，对第一个参数进行操作，其他参数进行其他操作
}

//固定长度的参数，怎么将已有的一个数组作为参数传入
//有一个需求：计算三角线周长
function sum4(x,y,z){
    return x+y+z;
}
let data=[4,4,6]
//es5
sum4(data[0],data[1],data[2])
sum4.apply(this,data)//这里使用了apply的一个特性，可以将数组拆分成一个一个的值传入。当然这也是es5中的做法。
//es6
sum4(...data)//这里再次使用了rest参数，将data中的三个值打散了传了进去，这里的rest参数和上面的rest参数的用法刚好是相反的，算是两种rest参数的应用。
//可以理解“...”的作用就你是打散后面的参数的意思。