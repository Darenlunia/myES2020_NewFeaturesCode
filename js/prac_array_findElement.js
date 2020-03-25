//遍历查找元素
let array=[1,2,3,4,5]
//es5
let find= array.filter(function(item){
    return item%2===0
})//主要用于找到符合要求的数组，但用于验证查找来说效率慢一些。
console.log(find)
let find2=array.find(function(item){
    return item===2
})//主要用来验证查找，如果存在只能找到复合要求的第一个值，不会找到符合要求的数组，这就是和filter的区别，所以效率高一些。
//上面的两个如果有符合要求的值，返回的是值不是索引，如何查找索引？
//Array.prototype.findIndex

//注： arr.find(function (value, index ,array){})
//arr.some(function (item){})   
//当find只有一个参数的时候，参数是value，some的唯一一个参数是键值对整体