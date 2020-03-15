//Promise对异常的处理
function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script=document.newElement('script')
        script.src=src
        script.onload=()=>resolve(src)
        script.onerror=(err)=>reject(err)
        document.head.append(script)
    })
}

//使用catch统一捕获错误，替换.then()中的reject函数。
//注意，这里使用的catch也是Promise对象的方法，是实例方法，不是静态方法。 
loadScript('./pra1.js')
    .then(()=>{
        return loadScript('./pra2.js')
    })
    .then(()=>{
        return loadScript('./pra3.js')
    })
    .catch(err=>{
        console.log(err)
    })
    //catch是在promise改变状态的时候去捕获的，不能使用throw new Error
