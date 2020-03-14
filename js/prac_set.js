 //es5主要是用object或者数组存储许多数据，现在新增set和map。
//set存储的成员互相必须是唯一的,如果存了重复的会自动过滤
let a=new Set()
let b=new Set([1,2,3])//Set中进行初始化时，可以不是数组，可以是任何可遍历的对象。 
a.add("hello")
a.add("haha").add("heihei")
var b=a.has("haha")//可以直接查值
var c=a.size()//判断长度
console.log(s.keys())//遍历key值
console.log(s.value())//遍历value值
console.log(s.entries )//返回键值对
s.forEach(element => {//foreach遍历
    console.log(element)
});
for (let item of s) {
    console.log(item)
}
//set没有提供直接改的方法，只能先删再添加
a.delete("haha")
a.clear()

