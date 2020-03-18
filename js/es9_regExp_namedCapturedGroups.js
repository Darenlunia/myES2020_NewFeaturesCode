//查看被匹配捕获到的字符串

console.log('2020-03-18'.match(/(\d{4})-(\d{2})-(\d{2})/))
//输出：
// [
//     '2020-03-18',
//     '2020',
//     '03',
//     '18',
//     index: 0,
//     input: '2020-03-18',
//     groups: undefined //这个groups是用来存储被匹配到的名字的
//   ]

//所以可以通过上面的输出内容，来查找所匹配的每个字符串：
let a='2020-03-18'.match(/(\d{4})-(\d{2})-(\d{2})/)
console.log(a[1],a[2])//通过下标查看被捕获的结果

//其他方法查看被捕获的结果 --> 用?<>起别名
let b='2020-03-18'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
console.log(year)
// [
//     '2020-03-18',
//     '2020',
//     '03',
//     '18',
//     index: 0,
//     input: '2020-03-18',
//     groups: [Object: null prototype] { year: '2020', month: '03', day: '18' }
//   ]
//可以看到起了别名后，groups中就有内容了
console.log(b.groups.year)
console.log(b.groups.day)

  

