//export简单语法汇总：
let xxx='123'
//正确语法
export let a='xxx'
export {xxx}
export default xxx

//错误语法
// export xxx

//import语法汇总
//全部导入
import * as mod from './mod.js' //.js可有可无。./必须有。
console.log(mod.a,mod.b)
console.log(mod.sum(mod.a,mod,b))
let p=mod.Person('Jack')
p.say()
//局部导入
import {sum} from './mod.js'
console.log(sum(1,2))
//导入默认
import a from './mod.js'
console.log(a)
//导入整个模块，不导入内部成员
//引入js
import 'lodash'
//引入其他资源，需要配合其他loader使用
import './style.css'
import './logo.png'
//当作函数使用，返回的是一个promise
//通常不重要的模块可以使用这种异步加载，例如广告文件
// mod2文件：
export let qq="abc"
//当前文件import(mod2)
import('./mod2')
    .then(mod2=>{
        console.log('mod2加载成功')
        console.log(mod2.qq)
    },err=>{
        console.log("加载失败")
    })
//export和import复合写法
export { foo, bar } from 'A';// 可以简单理解为：
import { foo, bar } from 'A';
export { foo, bar };
//****
export { es6 as default } from './someModule';// 等同于:
import { es6 } from './someModule';
export default es6;
