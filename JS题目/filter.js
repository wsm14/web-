const arr = [1,2,3,4];


var a = arr.filter((item,index)=>{
    return item>2;
})

console.log(a,arr)