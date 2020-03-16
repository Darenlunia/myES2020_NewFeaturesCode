//Generator就是一个函数，语法如下:
//比普通函数多了一个*，*前后有空格
//在Ggenerator函数内部可以使用yield暂停函数执行
//如果想嵌套Gnerator，yield后面要加*
//函数外部可以使用next恢复函数执行，同时next会返回当前操作的数据，和执行状态

//yield,令函数停止在yield表达式的位置
function * gen(){
    let val
    val= yield [1,2,3]//判断yield是否有返回值
    console.log(val)//undifined 说明灭有返回值
}

//next去函数体内部找yield或者函数结尾，只要能找到其中一个就会暂停。
//next返回值有两个
//第一个是当前yield后跟的表达式的值"value"，如果后面跟的是一句代码而不是值，那么返回undefined（或者说yiled后跟的是被遍历的值，因为yield总是停止在解析遍历值的那一句话）
//第二个是循环是否结束的判断值"done"，ture为已经结束，false为没结束
//例如后面输出的{ value: [1,2,3], done: false }
const l=gen()
console.log(l.next())
console.log(l.next())
//yield *的用法
//当yield后面加*，表示*后是一个可遍历的对象，也可以是Generator对象。
function * gen2(){
    let val
    val= yield * [1,2,3]
    console.log(val)
}
const l2=gen2()
console.log(l2.next())//{ value: 1, done: false }//由于yield后面加了*，所以yield后面的遍历值value不再直接是[1,2,3]，而是一个应该被遍历的对象，所以这里输出1，下一行输出2
console.log(l2.next())//{ value: 2, done: false }

//再补一句，为什么说yield后面跟的是被遍历的值，因为yield后面跟被遍历的值时，执行next函数的时候，会有返回值value，也就是说在外面调用l.next().value可以直接输出正在被遍历的值，不需要再yield后面写consloe.log去输出或者定义什么变量去获取这个正在遍历的值了。