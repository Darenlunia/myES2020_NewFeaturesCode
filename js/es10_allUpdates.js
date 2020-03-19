//Json**********************************************
console.log(JSON.stringify('\u{D800}'))//对0xD800-DxDFFF之间的字符无法编码成UTF-8，而会被识别错误


//数组********************************************************
// flat(数字表深度) map(函数操作) flatMap(函数操作)
let arr=[1,[2,3],[4,5,[6,7]]]
//数组多层嵌套，如果想扁平化输出：
console.log(arr.flat())//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
//可以指定深度递归遍历数组，并将遍历的结果组合成一个新数组返回，默认深度为1
console.log(arr.flat(2))// [ 1, 2, 3, 4,5, 6, 7]
let arr1=[1,2,3]
//先复习一下数组的map:
console.log(arr1.map(item=>item*2))//[ 2, 4, 6 ]
console.log(arr1.map(item=>[item*2]))//[ [ 2 ], [ 4 ], [ 6 ] ]
console.log(arr1.map(item=>[item*2]).flat())//[ 2, 4, 6 ]
console.log(arr1.flatMap(item=>[item*2]))//[ 2, 4, 6 ]
//flatMap：flat和map的结合
console.log(arr.flatMap(item=>item*2))//[ 2, NaN, NaN ] 所以说明是先map再flat，所以不能这么操作

//字符串*******************************************************
//新增API-去掉空格**************************************：
// 1.trimStart（== trimLeft） 2.trimEnd（== trimRight） 3.去掉首和尾：.trim()
let str='   foo   '
console.log(str)
//正则表达式方式去掉空格 ^\s+ 和 \s+$
console.log(str.replace(/^\s+|\s+$/g,''))
//新增接口去掉空格：
console.log(str.trimStart())//去掉开头空格
console.log(str.trimEnd())
console.log(str.trim())
//新增正则的API-matchAll**************************************** ：
//作用：获取在字符串中捕获到的所有子串的集合，注意是捕获
//exec、replace返回的是捕获，match返回的是完全匹配
let str1=`"foo" and "bar" and "baz"` 
//需求提取str1双引号中的内容
//方法一：正则+exec()
function select(regExp,str){
    const matches=[]//保存匹配结果
    //exec的特点：
    //字符串中每次只匹配一个结果，如果正则表达式用了全局修饰符，它会在每次被调用时匹配下一个位置。
    while(true){
        const match = regExp.exec(str)
        if(match===null) break
        matches.push(match[1])
    }
    return matches
}
console.log(select(/"([^"]*)"/g,str1)) //其中正则表达式里面小括号中的是捕获内容
//输出：[ 'foo', 'bar', 'baz' ]
//exec是由正则表达式调用的，match和replace是由字符串调用的
//方法二：正则+match()
console.log(str1.match(/"([^"]*)"/g))//用match匹配到的不仅仅是捕获内容，还有捕获以外的字符。
//输出：[ '"foo"', '"bar"', '"baz"' ]
//方法三：replace，replace的第一个参数是正则表达式，第二个参数是替换的字符串；
//但replace还有另一种用法，就是第一个参数是正则表达式，第二个参数是一个函数，这个函数有两个参数，第一个完全匹配，第二个是捕获
//不写代码了, 就是用第二个参数为函数, 函数中第二个参数是捕获值,获取它捕获的内容组成数组返回就可以了
//方法四：(ES10 新增:matchAll
function select2 (regExp,str){
    const matches=[]
    for(const match of str.matchAll(regExp)){//直接对一次性捕获的所有子串进行遍历
        matches.push(match[1])
    }
    return matches
}
console.log(select2(/"([^"]*)"/g,str1)) //[ 'foo', 'bar', 'baz' ]



//Object新增API
//Object.fromEntries():数组的Object遍历，数组转化成Object
//这个方法对应于Object.entries(obj):对象转可遍历数组
//注意：Object.fromEntries()和Object.entries(obj)，所操作的对象和数组，形式是一模一样的，可以说这两个方法是完全逆向的两个方法
//通过这两个API，就可以让分别属于数组和对象的方法交叉使用了。
const arr2=[['foo',1],['bar',2]]
const obj=Object.fromEntries(arr2)
console.log(obj.bar)
//再举例一个应用：过滤长度为3的key属性
const obj2={
    abc:1,
    def:2,
    dsafdsaf:3
}
//先看看Object.fromEntries和Object.entries数据可逆转化：
console.log(Object.entries(obj2))//对象转数组后，输出: [ [ 'abc', 1 ], [ 'def', 2 ], [ 'dsafdsaf', 3 ] ]
console.log(Object.fromEntries(Object.entries(obj2)))//数组转对象后，输出：{ abc: 1, def: 2, dsafdsaf: 3 }
//继续来做这个应用：
let res=Object.fromEntries(
    Object.entries(obj2).filter(([key,value])=>key.length===3)//对象转数组后，就可以用数组的方法了，例如遍历、filter等等。
)//用filter的时候，本来参数应该是item，在这里做了解构赋值，将item分成了key和value
console.log(res)//输出：{ abc: 1, def: 2 }


//es10对try catch的更新***********************************************8
//允许catch后面不加()了
try{
    //...
}catch{
    //...
}

//es10 新增数据类型 BigInt *********************************************
//处理超过2^53以外的数据的，以前的number只能处理2^53内的数据
console.log(typeof 11n);//bigint

