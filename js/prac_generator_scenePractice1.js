//下面是一个练习
//需求场景：分别从观众群1观众群2观众群3中抽一名一等奖，3名二等奖，5名三等奖，主持人要控制抽奖过程，不能一次性显示全部获奖人。
function * draw(first=1,second=2,third=3){
    //设置群众
    let firstGroup=['1a','2a','3a','4a','5a']
    let secondGroup=['1b','2b','3b','4b','5b','6b','7b','8b','9b']
    let thirdGroup=['1c','2c','3c','4c','5c','6c','7c','8c','9c','10c']
    //设置计数器
    let count=0
    let random

    while(1){//在抽奖外层包一个无限循环，中间加判断条件去直接return结束函数
        if(count<first){
            random=Math.floor(Math.random()*firstGroup.length)
            console.log('第'+(count+1)+'位:')
            yield firstGroup[random]//令yield后面直接跟遍历值，可以在函数外执行next的时候去直接引用这个遍历值
            count++
            secondGroup.splice(random,1)
        }else if(count<first+second){
            random=Math.floor(Math.random()*secondGroup.length)
            console.log('第'+(count+1)+'位:')
            yield secondGroup[random]//令yield后面直接跟遍历值，可以在函数外执行next的时候去直接引用这个遍历值
            count++
            secondGroup.splice(random,1)
        }else if(count<first+second+third){
            random=Math.floor(Math.random()*thirdGroup.length)
            console.log('第'+(count+1)+'位:')
            yield thirdGroup[random]//令yield后面直接跟遍历值，可以在函数外执行next的时候去直接引用这个遍历值
            count++
            thirdGroup.splice(random,1)
        }else{
            return false
        }
    }
}

let leader=draw()//抽奖函数赋值给主持人
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
console.log(leader.next().value)
