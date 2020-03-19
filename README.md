# es6-es10_practice
es6-es10特性练习，以及一些算法题练习，每日更新，每日进步一点点。

初始代码双引号用的比较多，js中最好是用单引号，后来的代码练习有所改进。
## 1. ES6代码练习总结
### (1) Array练习总结
主要从数组的遍历、转换、生成、查找四个方面进行了语法对比练习。  
重点了解forin forof from of fill find filter  
了解js中的可遍历元素有哪些（后面有个章节会讲到）  
es5中关于数组的知识还有很多，自己再去练习。  

### (2) 类
主要从类的声明、创建、属性（getter setter）和方法（静态方法）、继承进行了对比练习。  
了解es5和es6类的关联（es6的类就是es5的语法糖）。  

### (3) 函数
主要从函数的参数默认值、不确定参数、箭头函数三个方面进行了语法对比练习。  
要注意箭头函数中的this指向。  

### (4) Object的更新
主要讲了对象属性的缩写、set和map新数据结构、对象的深拷贝浅拷贝。  
WeakSet和WeakMap，和set、map相似，只是加了限定条件，只能接收对象。  
区分静态方法和实例方法，实例方法用实例对象去调用，不能直接用Class.function调用。  

### (5) 正则 regexp
正则表达式后面加u修饰符可以解决很多问题，这里举例不全，可以去参考阮一峰es6入门那本书；  
额外资料可参考：unicode和编码方式概述。  

### (6) Template
使用模板字符串 ``+${}符号进行字符串换行、变量、表达式的处理。  
使用 函数名+模板字符串（Tag函数形式）可以创建具有逻辑关系处理的字符串模板。  

### (7) Promise
关于异步操作，要记得用Promise对象去解决。   
then、catch都是Promise的实例方法。  
resolve、reject，还有all(全到才得)、race(先到先得)都是Promise的静态方法。  

### (8) Reflect
反射机制，很多为取代Object中原有方法而设计，令类和对象都作为Reflect中静态方法的参数，使得对类和对象的处理更加灵活。  
静态方法：apply、construct、以及替代原有Object方法的对应方法（包括读写原型方法、读写属性等等）；注:Object中的一些方法正在逐渐向Reflect迁移，且后续Object可能会移除这些旧方法。所以尽量学习使用Reflect的方法代替原有方法。  

### (9) Proxy
讲了基础语法new Proxy(target,{set/get})、几种应用场景中的灵活使用、撤销代理（Proxy.revokable,临时代理）。  

### (10) Generator
讲了Generator的基础语法（function *）、yield的用法和返回值、yield后应该紧跟遍历值、next的用法和返回值、yield+*可以进行嵌套遍历、使用return或捕获异常可以实现循环的终止或跳过、两个应用练习，实现对Generator的灵活使用。  

### (11) Iterator
Iterator的终极目标就是将一个对象能搞成可for-of遍历的对象就可以了（也就是给一个复杂的数据结构自定义一个遍历）；  
本身可遍历的有数组、伪数组（集合）；  
Iterator的写法遵循可迭代协议和迭代器协议；  
Gnerator也遵循迭代器协议，所以可以用G的next替代Iterator中的一部分写法；  
也就是说对象的Iterator接口有两种写法，一种是demo中的原始框架写法，一种是generator的写法，根据自己写的喜好选择即可  

### (12) Export Import和module
这里就是练习变量、对象、函数、类的导入导出（import from/export [default] ）  
以及导入到时候名称改写  
以及每个导出文件中可以有多个到处接口，但默认导出只能有一个  
以及可以用* as Mod去代替所有导出模块  

### (13) 其他
这里关于let/const、正则、字符串模板后续再做更新。  
symbol用的不太多，后续有空自己系统练习了再补。  

## 2. ES7代码练习总结
#### (1) 用includes(元素)判断元素是否存在  
#### (2) **代表乘方  

## 3. ES8代码练习总结
#### (1) 异步Promise的语法糖：async和await  
#### (2) 对象遍历方法Object.keys().forEach()  
#### (3) 字符串补齐接口：padStart padEnd  

## 4. ES9代码练习总结  
### (1) for await of 解决的问题：  
含异步操作的集合的遍历  
含异步操作的自定义数据结构的遍历  
和for of 的区别：加async和await  
### (2) 对Promise的增强： 
原先是 then(()=>{resolve})+catch()=>{(reject})  
现在增加了一个finally(()=>{})    
### (3) Object新增Rest Spread   
即使用...rest将对象元素打散，从而实现批量对象合并和批量属性获取。   
### (4) RegExp 正则知识点  
#### a. dotAll   
新增修饰符/s配合{.}使用，此时{.}可以匹配包括/n在内的所有字符  
#### b. named captured groups(命名分组捕获)   
match()匹配可以实现分组捕获，通过数字下标查找捕获子串    
命名分组捕获，可以使用?<>给匹配子串其别名，通过groups.别名 调用  
#### c. lookbehind assert
先行断言(?=)    
后行断言(?>=)    

## 5. ES10代码练习总结    
主要包括Json、字符串Array、Object、Function、
try.catch、BigInt方面的更新 
这里要注意字符串中对正则方法(matchAll)的更新，还要注意“捕获”和“完全匹配的差别”    
另外还要注意Object.fromEntries()和Object.entries()可以完成数组和对象之间的转换，从而实现交叉使用对方的API来解决问题    