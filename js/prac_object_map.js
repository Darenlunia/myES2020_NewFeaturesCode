let a=new Map()
//可以传一个可遍历的键值对对象
let b=new Map([[1,2],[3,4]])//1=>2 3=>4
//map的key可以是任意值，甚至可以是一个对象或者函数，下面举个例子
let o=()=>{ console.log('o.o')}
a.set(o,0)//可以用这种方法给函数添加标记数据
a.set(1,2)
a.set("3",4)
a.set(1,5)//修改key为1的值
a.get(1)
console.log(a) //Map { [Function: o] => 0, 1 => 5, '3' => 4 }
a.has(1)//查找数据(查key)
a.keys()//遍历keys
a.values()//遍历values
a.forEach((value,key)=>{console.log(value,key)})
//当foreach遍历一个map对象的时候，如果同时遍历key和value，一定要先写value，再写key
for (const [key,value] of a) {//当forof遍历的时候是先key后value
    console.log(key,value)
}
a.delete (1)
a.clear()
var len = a.size

 
