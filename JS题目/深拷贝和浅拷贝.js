
//只有涉及到地址引用类型 数据   才会有深拷贝和浅拷贝的问题

let obj1 = {
    b: [1, 2, 3, 4],
    c: {
        user: "kevin",
        sex: "男"
    },
    d: "字符串"
}

//这种不叫拷贝，直接使用同一个地址，修改任意数据，两个都受影响
let obj2 = obj1


//浅拷贝
// let obj3 = {};

// for (const key in obj1) {
//     obj3[key] = obj1[key]
// }
// obj3 = {...obj}
// obj3.d = "哈哈哈"
// console.log(obj3,obj1);

// obj3.b[0] = 6;
// console.log(obj3,obj1);


//深拷贝

let obj4 = {};
function deepCopy(newObj, oldObj) {  //（新数据，被拷贝数据）
    for (key in oldObj) {
        if (Array.isArray(oldObj[key])) {
            // 如果数据类型是数组，必须写在最上面，
            // 因为 ( [1,2] instanceof Object === true)
            newObj[key] = []
            deepCopy(newObj[key], oldObj[key])
        } else if (oldObj[key] instanceof Object) {
            //如果数据是对象类型
            newObj[key] = {}
            deepCopy(newObj[key], oldObj[key])
        } else {
            //数据是基本数据类型
            newObj[key] = oldObj[key]
        }
    }
    return newObj
}



console.log(deepCopy(obj4, obj1))



// 第二种方法
// obj4 = JSON.parse(JSON.stringify(obj1));