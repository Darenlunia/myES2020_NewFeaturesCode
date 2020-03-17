//如果想把js分成不同的模块，es5会借助第三方框架，例如require.js等
//es6有了专门的语法做模块的导入导出功能，并且可以再导入时修改变量名

//这个mod模块是一个导出模块，和im_mod配合食用

//导出的数据可以是变量、类、对象、函数等，一个模块可以用导出多个内容，但使用defaut导出的，也就是默认导出的只能有一个

//普通写法：依次导出
export const name='Hello,'
export let addr='Beijing'
export let list=[1,2,3]
export function fn(){ }
//一起导出
let a={x:1,y:2}
let b=name=>{console.log(name)}
let c=100
export{
    a,b,c
}
// export default Test 默认导出一个类
export class Test{
    constructor(id){
        this.id=id
    }
}

//导出一个默认值
//注意每个大模块下面只能有一个默认值
//这个默认值在被其他文件引用的时候，可以不用花括号括住
//这个默认值在被其他文件引用的时候可以被命名为其他名称
let animal="dog"
let envrionment="river"
export default {
    animal,envrionment
}
//由于只能默认导出一个值，使用这种方式是直接导出了一个总对象，里面包含两个子元素对象，分别是animal和environment
//另外，导出默认值的时候，由于可以在新文件中直接自定义名称，所以在这个导出文件中，可以不给这个默认导出值起名，例如直接默认导出一个匿名函数，一个匿名类等等



