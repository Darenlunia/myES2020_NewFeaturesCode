// 基础语法:import {变量名称} from '路径'
//在导出文件中，使用了default的可以不用加花括号.
//也就是说不加花括号进行导入的，都是在源文件中默认导出的值
import animal123hahahahha,{name,addr as addr2,list,a,b,c,fn,Test} from './prac_export_ex_mod'
//源文件中的默认值在被引入的时候可以自己再起个自定义的名字
//而花括号中的值需要用 as 来起自定义的名字，例如{ addr as addr2}
console.log(name,addr2,animal123hahahahha)
fn()
let t=new Test(1)

//如果懒得一个一个导入，可以用*代替花括号中的内容，相当于把所有的模块都放入了以恶搞名字叫Mod的对象中
//但此时不能用Mod.变量名来取得default变量，必须用Mod.default来取得源文件中的默认导出变量
import * as Mod from './prac_export_ex_mod'
// 这时候引用变量或函数或类时，前面都要加一个Mod.xxx
let t2=new Mod.Test(2)