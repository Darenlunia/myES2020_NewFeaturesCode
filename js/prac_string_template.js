// 字符串模板
// 往往字符串汇总会包含换行、变量、表达式、逻辑运算时的处理。
//在es5中使用的是字符串拼接的方法将这些组合在一起
//es6中的方法：使用``+${变量或表达式}，其中，``中还可以加回车
let num=1
let money=3
const str=`I want ${num} anpple, 
and each apple needs ${money} dollars.`
console.log(str)


//函数+字符串模板
function Price(strings,type){
    console.log(strings)
    console.log(type)
    let s1=strings[0]
    const retailPrice=20
    const wholeSalePrice=16
    let showTxt
    if (type==='retail'){
        showTxt="购买单价是"+retailPrice
    }else{
        showTxt="购买的批发价是"+wholeSalePrice
    }
    return `${s1}${showTxt}`
}
let showTxt=Price`您此次的${'retail'}`
console.log(showTxt)