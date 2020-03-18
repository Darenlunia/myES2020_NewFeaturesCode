//先行断言 Demo
let test='Hello world'
console.log(test.match(/Hello(?=\sworld)/))
//输出：[ 'Hello', index: 0, input: 'Hello world', groups: undefined ]
//其中的 (?=\sword) 模式就是先行断言，代表匹配到Hello后，马上判断后面的字符串是否满足这个模式所设定的条件。

//其中的\s 表示空格

//后行断言 Demo
//和先行断言方向相反，匹配到一个字符串后，判断它前面的字符串是否满足某个条件
console.log(test.match(/(?<=Hello\s)world/))
//输出[ 'world', index: 6, input: 'Hello world', groups: undefined ]
//(?<=Hello\s)

//还可以把=换成!，表示不等于


