//es6中正则表达式

//y修饰符:粘连sticky
const s='aaa_aa_a'
const r1=/a+/g //^ $ //^字符串起始位置，$字符串终止位置
const r2=/a+/y
//y和g的区别
console.log(r1.exec(s))//aaa
console.log(r2.exec(s))//aaa
console.log(r1.exec(s))//aa
console.log(r2.exec(s))//null，必须要求连续匹配，如果不满足则返回null

//中文处理问题-多个中文字节匹配，识别超过\uffff的中文字符
// unicode  u修饰符 涉及到中文字符的都记得加/u就可以了
let s2='\uD842\uDFB7'
console.log(/^\uDB42/u.test(s2))//加上/u,这句代码返回false，因为识别出来它不是一个完整的字符。

//es6中正则表达式后面习惯加u