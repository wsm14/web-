
//数组方法:https://www.cnblogs.com/jiuxia/p/11509616.html

//不改变原数组

/*
join()：将数组转为字符串并返回转化的字符串数据，不会改变原来的数组，括号中用双引号包括自己想用的分隔符，默认为逗号
toLocaleString
toString：将数组转换成字符串，类似没有参数join()
slice：截取指定位置的数组，并且返回截取的数组，不会改变原数组,
从开始的位置数，截取到结束位置之前

concat:合并数组，可以合并一个或者多个数组，会返回合并数组之后的数据，不会改变原来的数组
indexOf：从左向右查询，查询索引，如果存在返回索引，不存在返回-1
satIndexOf：从右向左查询
*/
let arr = [1,2,3,4];

console.log(arr.splice(1,1,5),arr)

//改变原数组

/*
splice:向数组添加，或从数组删除，或替换数组中的内容，返回呗删除/替换的元素
splice(index,num,item)  三个参数分别代表  开始的位置，删除替换的数量，还有添加的元素
sort：对数组内的数据进行排序（默认是升序），并且返回排过序的新数组，会改变原来的数组




pop:删除数组的最后一位，并且返回删除的数据，会改变原来的数组
shift：删除数组的第一位，并且返回删除的数据，会改变原来的数组
push：在数组的最后一位新增一个或多个数组，并且返回新数组的长度，会改变原来的数组
unshift:在数组的第一位新增一个或多个数组，并且返回新数组的长度，会改变原来的数组
reverse:将数组的数据进行反转，并且返回反转后的数组，会改变原数组
copyWithin:将指定位置的成员复制到其他位置（会覆盖原有成员）,然后返回该数组，会修改但倩倩数组
fill：使用指定的元素填充数组
*/



//便利方法
/*

forEach:便利数组，没有返回值,forEach(callback),回调函数中默认有三个参数，分别为item,index和arr，允许callback更改原始数组的元素

every：判断数组中每一项是都都满足条件，只有所有项都满足条件，才会返回true,当回调函数的返回值为true时，类似forEach的功能，便利所有，如果为false，那么停止运行


some:判断数组中是否存在满足条件的项，只要有意向满足条件，就会返回true


filter：同forEach功能，filter回调函数需要返回布尔值，为true的组成一个新的数组返回，原数组不改变

map：同forEach功能，map的回调函数会将执行结果返回，最后map将所有回调函数的返回值组成新的数组返回，返回的是新的数组



reduce：一般来计算数组所有数字的和，从数组的第一项开始。逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值

一共两个参数，一个回调函数，一个时作为归并的初始值

回调函数一共有四个参数，prev，now，index，self   pre就是第二个参数或者时返回值，now当前遍历的值

如果没有第二个参数的话，prev相当于数组的第一个，去加数组的第二个

如果有的话，prev就等于这个参数


reduceRight：和reduce一样，不过时从右向左
find：查找第一个符合条件的数组元素，并且返回该值，没有返回undefind
findIndex：查找第一个符合条件的数组元素的下标，并返回，没有就返回-1
keys：返回一个新的数组迭代器对象，对象包括数组每个索引的值
values：对象包括数组值
entries：对象包括数组的值和索引

*/

let arr2 = [55,66,177,188,99]

console.log(arr.entries);
// arr2.forEach((item,index,arr)=>{
//     console.log(item,index,arr2)
// })



//  let num = arr2.reduce((prev,now,index,selft)=>{
//     console.log(prev,now)
//     return prev +now
// })

// console.log(num)