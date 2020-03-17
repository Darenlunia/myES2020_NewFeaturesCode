//数组解构赋值
//首先，为什么要给数组的元素赋值？因为如果频繁取数组元素会消耗内存
//解构赋值可以批量赋值
const arr=['hello','world']
let [x,y]=arr//把后面的数据拆解开赋给前面的变量
console.log(x,y)
//语法规定左边的部分必须是中括号

//跳过赋值
let arr1=['a','b','c','d','e']
let [first, , third]=arr1
console.log(first,third)


//其他类型的解构：（只要是可以遍历的都归为数组解构赋值里面，因为左侧用的都是中括号）
let arr2='qwert'
let [m, , n]=arr2
console.log(m,n)
//为啥字符串也可以？规定右边的只要可遍历就可以解构赋值，例如set、map也可以
let arr3=new Set([213,21,321,23231])
let[x1,,y1]=arr3
console.log(x1,y1)

//已有的对象属性的赋值，注意这里不惜要再用let了
let user={
    name:'s',
    sename:'t'
};//注意这里要带分号，因为花括号和中括号之间腰带分号
[user.name,user.sename]=[1,2]
//所以这里的数组解构赋值不仅可以赋简单的变量，还可以赋给已有属性的对象

//两个变量交换值
let a=2,b=3;
[b,a]=[a,b]

// res参数 res变量： ...x
let arr4= [1,2,3,4,5,6,7,8,9]
let [one,two,...last]=arr4
console.log(one,two,last)

//数据量不够的时候，多余的变量取undefined
let arr5=[1,2]
let [x2,y2,z2]=arr5
console.log(z2) //输出undefied

//设置默认值
//在左侧用 等号 做默认值处理