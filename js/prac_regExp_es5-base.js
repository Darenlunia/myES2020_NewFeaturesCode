//正则表达式语法：/正则表达式主体/修饰符
//正则表达式模式：[]:表示要匹配字符组的一个列表；[]{}:花括号中设置中括号中的字符的字符长度，放量词。(x|y)查找任何以|分割的项目。
//有特殊含义的字符\d 查找数字；\s查找空白字符；\b匹配单词边界 \u查找以十六进制数规定的unicode字符
//量词：n+ n* n?
//举例 [0-9]+ 匹配多个数字，
//abc$ 匹配字母abc并abc结尾 $表示结尾
//^abc ^表示开头
// /a.c/ 其中点匹配字符串中除了换行符以外的所有单个字符
//常见修饰符：i 不区分大小写；g：执行全局匹配（否则只找到第一个匹配后停止）；m：执行多行匹配
//要区分开“捕获”和“完全匹配”的概念，捕获一般指小括号中括起来的内容。exec可捕获，match不仅捕获

//常用方法：

//字符串方法：search()和replace()
//search 检索与正则表达式匹配/或与字符串匹配的字符串，返回子串起始位置
//replace 替换复合正则表达式的字符串，返回替换后的字符串
//replace的第一个参数是正则表达式，第二个参数是替换的字符串；
//但replace还有另一种用法，就是第一个参数是正则表达式，第二个参数是一个函数，这个函数有两个参数，第一个完全匹配，第二个是捕获
let str ='Hello World!'
console.log(str.search(/world/i))
console.log(str.search('World'))//search也可以匹配字符串，不是正则表达式
console.log(str.replace(/world/i,'lunia'))
//注意这两个方法只能用在字符串后面
//新增match，检索与正则表达式匹配的字符串，返回检索到的字符串
console.log(str.match(/world/i))
//使用match匹配的结果可以存储在一个数组中，这个数组的每个元素是被检索出来的每个字符串

//RegExo对象，预定义了属性和方法的正则表达式对象
//test()检测字符串中是否有匹配正则的文本，返回true or false
//exec()查找匹配正则表达式的结果，字符串中每次只匹配一个结果，如果正则表达式用了全局修饰符，它会在每次被调用时匹配下一个位置。
//注意这两个方法只能用在正则表达式后面
let patt=/e/;
console.log(patt.test(str))//true
console.log(/l/.exec(str))//[ 'l', index: 2, input: 'Hello World!', groups: undefined ]
