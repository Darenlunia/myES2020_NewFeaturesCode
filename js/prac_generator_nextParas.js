//next是可以传值进去的，从而修改内部执行的数据（也就是yield后面的正在被遍历的数据，因为yiled一般后面跟的表达式都是本次遍历应该输出的值）
function * gen(){
    let val
    val= yield [1,2,3]
    console.log(val)
}

const l=gen()
console.log(l.next(10))//找yield表达式，是yield [1,2,3]，解析完yield [1,2,3]后，返回值是null，被参数10替换，所以yield [1,2,3]会返回10，但由于还没涉及到本行代码的赋值操作，所以val没有赋值为10.
console.log(l.next(20))//找yield表达式的上一次断点，发现下一步是开始执行赋值操作，这时候把替换了yield[1,2,3]的返回值的20赋值给val，所以最后输出20
//所以，next的参数可以通过改变yield表达式的返回值的方式，来改变内部数据

//再举个例子:
function * gen1(){
    let val
    val= (yield [1,2,3])+7
    console.log(val)
}
const l1=gen1()
// console.log(l1.next(10))//不输出
// console.log(l1.next(20))//输出27
console.log(l1.next())//不输出
console.log(l1.next())//输出NaN，因为此时yield为null，它+7为NaN

//如果yield后面跟的是代码，而不是数据表达式，那么它自身就是一个断点，下一轮next的时候执行它后面那句代码。
//如果yiled后面跟的是表达式，这个表达式就会共同拥有一个返回值null，如果next给它传了参数，那返回值就是这个参数，如果没传参数就是null。

//就是说yield后面可以跟两种，第一种是表达式，第二种是代码句子。
// 如果跟表达式，例如yield [1,2,3] 、yiled 1这种，那么他们就会合为一体，共同有一个返回值
// 如果没有表达式，那么它自身就是一个表达式。
// 每次的yield的断点就是执行完yield表达式。
//也就是说，next可以传参数也可以不传参数，如果传参数，就修改yield表达式的返回值，修改了内部业务逻辑。
