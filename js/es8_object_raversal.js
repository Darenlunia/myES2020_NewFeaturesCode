//es8新增的对Object的快速遍历方法
let grade={
    'lilei':96,
    'hanmeimei':99
}

let result=[]
for (const [k,v] of grade) {
    result.push(k)
}

Object.keys(grade).forEach((key)=>{
    console.log(key,obj[key])
})