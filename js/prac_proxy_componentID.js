//场景四：做监控后，如果有组件出错了，怎么识别是哪个组件出了问题呢？
//答：为每个组件生成一个 “唯一” “随机” “仅可读不可写的” 身份证cardID
//注意：这个场景主要是为了给每个 组件 生成ID
class Component{
    constructor(){
        this.id=Math.random().toString().slice(-8)//生成随机id-->先生成一个随机数，然后转化为字符串，然后取后八位
    }
}

let com=new Component()
let com2=new Component()
console.log(com.id,com.id,com2.id)//证明不会变化，是随机的
com.id='abc'
console.log(com.id,com.id,com2.id)//但发现com.id是被修改的。

//之前的方式，对id设置不可写仅可读：
class Component2{
    get id(){//注意如果要使用get id()的话就不能再在constructor中设置this.id了，也就是在一个类中不能重复定义属性。
        return Math.random().toString().slice(-8)
    }
}//但每次读都会新生成一个id


//使用代理改造：
class Component3{
    constructor(){//用proxy提供原始数据，这样id在每个实例中就是唯一的了。
        this.proxy=new Proxy({
            id:Math.random().toString().slice(-8)
        },{})
    }
    get id(){//注意如果要使用get id()的话就不能再在constructor中设置this.id了，也就是在一个类中不能重复定义属性，所以这里用proxy来代替。
        return this.proxy.id
    }
}
//代理配合get使用，就达到了id随机，不同实例中唯一且只读的效果。