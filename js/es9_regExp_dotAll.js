//点.是用来匹配任意字符的，但有一些情况下无法匹配，例如：
console.log(/foo.bar/.test('foo\nbar'))//false，因为\n不能被.识别
console.log(/foo.bar/.test('fooabar'))//true

//怎么识别所有字符： 用 s 修饰符，s即dotAll模式
console.log(/foo.bar/s.test('foo\nbar'))//true

const re=/foo.bar/s
//判断是否使用dotAll模式
console.log(re.dotAll)//true
console.log(re.flags)//s 输出所有修饰符

