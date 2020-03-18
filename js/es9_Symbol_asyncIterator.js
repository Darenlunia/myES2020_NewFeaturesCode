//异步操作的自定义结构 让这个结构支持遍历
const obj={
    count:0,
    //↓ 自定义一个异步业务 Gen
    Gen(time){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){ 
                resolve({value:time,done:false})
            },time)
        }) 
    },
    //↓ 自定义异步结构的迭代器,以及定义迭代器中的每次迭代内容（执行四次异步操作）
    //当一个对象的属性是变量的时候，要用中括号括起来；由于这里是要遍历异步操作，所以不再是简单的iterator而是asyncIterator
    [Symbol.asyncIterator](){
        let self=this
        return{
            next(){
                self.count++
                if(self.count <4){
                    return self.Gen(Math.random()*1000)
                }else{
                    return{
                        done:true,
                        value:''
                    }
                }
            }
        }
    }
}

//结果验证
async function test(){
    for await(let item of obj){
        console.log(Date.now(),item)
    }
}
test()