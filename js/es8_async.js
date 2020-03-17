//es8中提出了比es6的Promise更优雅的异步方式
//在声明的函数前面加一个async
async function as1(){
    return 27//等价于return Promise.resolve(27)
}
console.log(as1())//输出：Promise { 27 }，而且这个promise对象的status是“resolved” //注意：详细信息需要在浏览器中看到，直接在vscode中运行只能看到简单结果。
//加上async后，将原返回值封装到了Promise对象的resolve中。
as1().then(val=>{
    console.log(val)
})