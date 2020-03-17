//对String补白的方式
//es6可以使用字符串模板格式化

//先转化为字符串，再用padStart补齐。

for(let i=0;i<110;i++){
    console.log(i.toString().padStart(4,'*#'))//表示必须三位字符串输出，不足补零
}
//还有padEnd