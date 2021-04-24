//js数据类型   Number   boolen null  undefiend string  object symbol bigInt


//1,typeof  基本数据类型可以有效检测   但是引用数据类型的话检测 数组[]，普通对象，正则对象都是object，检测null也是object，检测function是function


//2,instanceof  用来检测某个实例是否属于这个类  

//判断A的原型链指向是否是B的原型对象，也就是判断A是否为B的实例对象    

//缺陷  不能精准的判断object的具体数据类型

console.log({} instanceof Array)


//Object.prototype.toSting  来判断类型   返回[object array]




//判断特定类型的api

//Array.isArray

//isNaN



