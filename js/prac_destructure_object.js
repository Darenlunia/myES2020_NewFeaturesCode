//当右侧是数组或map set时可以用数组解构，当右侧是对象时，要用对象解构
let options={
    title:'menu',
    width:100,
    height:200,
    color:'red'
}


let {width,height}=options//左侧是花括号，并且必须和右侧的属性名一致,因为这里写的是简写形式，原型是{width:width,height:height}，省略了冒号后面的变量名
console.log(width,height)
let {width:width2,height:height2}=options
console.log(width2,height2)
//实际上赋值的是冒号后面的变量名，冒号前面的只是一个属性标记。
let {a=1}=options
//如果给一个没有属性名的变量赋值对象，如果这个变量有默认值则为默认值，否则为undefined
console.log(a)

//对象中也是可以用res变量的：
let {color,...last}=options
console.log(color,last)//输出： red { title: 'menu', width: 100, height: 200 }
//只不过res也是一个对象，不是一个数组了

//对象中的嵌套对象或者数组：
let options2={
    size:{
        width:300,
        height:400
    },
    items:['cake','donut'],
    extra:true
}
//左侧声明变量的结构要和右侧的数据结构一致才行：
let {size:{width:width3},items:[,x]}=options2//注意,这里的items中还可以嵌套数组！
console.log(width3,x)