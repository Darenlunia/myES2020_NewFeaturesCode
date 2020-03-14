//拷贝：把对象复制到另一个对象上
const source={a:1,b:2}
const target={}
//es5拷贝：遍历赋值
//es6拷贝：Object.assign
Object.assign(target,source)
console.log(target) 
//assign是有缺陷的，当target中已经有数据，source又有相同的key值时，不会合并相同key值的数据，而是直接覆盖了之前的值。
//因为assign是浅拷贝，对于引用类型的值，直接赋值了指针。
//要实现深拷贝：就得用递归+assign了。
