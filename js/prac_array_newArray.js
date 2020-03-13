//创建一个新数组，以及对数组内容的填充

//es5
let array1=Array(5)
let array2=[]
let array3=['','']
let t=['a','b','c']
array3.push(1,t)
console.log(array3)
//es6 of+fill
let array4=Array.of('','',1,t)
console.log(array4)
//这里的array3和array4的值都相当于array=['','',1,['a','b','c']]
let array5=Array(5).fill(1)//这一句和伪数组那一页的Array.from功能相似，先声明5个长度的数组再初始化为1
//Array.fill的参数
//value
//start(不包括start)
//end(不包括end)
let array=[1,2,3,4,5]
console.log(array.fill(8,2,4))