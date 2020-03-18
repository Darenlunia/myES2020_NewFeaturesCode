//Promise的原有语法：
// resolve:正确执行的返回
// reject:异常error的返回
//resolve和reject 只能执行其中一个
//这里新增了一个Promise兜底API：finally
//和try catch的finally有点相似，就是不管try和catch执行的哪一个，都会执行finally中的函数


function Gen(time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(time<500 ){
                reject(time)
            }else{
                resolve(time)
            }
        }, time);
    })
}

Gen(Math.random()*1000)//生成一个0-1秒之间的数
    .then(val=>console.log('resolve',val))
    .catch(err=>console.log('reject',err))
    .finally(()=>{console.log('finish')})