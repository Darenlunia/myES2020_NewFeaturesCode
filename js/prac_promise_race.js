//模拟两个反应速度不同的线路
const p1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => { //使用延时函数模拟异步操作。
            resolve(1)//1线路-响应慢
        }, 1000);
    })
}

const p2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => { //使用延时函数模拟异步操作。
            resolve(2)//2线路-响应快
        }, 0);
    })
}
//race的参数是一个Promise对象的数组
Promise.race([p1(),p2()]).then((value)=>{
    console.log(value)
})
//race就是只返回这个对象数组中最先返回的值。
//最先的意思就是哪个Promise的state先变成了fullfilled
//所以两个异步函数之间产生了竞争：race，跑得快的才能被输出。